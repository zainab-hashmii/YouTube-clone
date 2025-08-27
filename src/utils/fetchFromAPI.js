import axios from "axios";

const api = axios.create({
  baseURL: "https://youtube-v31.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,  // put your key in .env
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
});

const cache = new Map();

export async function fetchFromAPI(path, params = {}) {
  const key = `${path}:${JSON.stringify(params)}`;
  if (cache.has(key)) return cache.get(key);

  const request = () =>
    api
      .get(path.startsWith("/") ? path : `/${path}`, {
        // 👇 ensure 'part' appears exactly once
        params: { part: "snippet", maxResults: 12, ...params },
      })
      .then((r) => r.data);

  try {
    const data = await request();
    cache.set(key, data);
    return data;
  } catch (err) {
    // light retry for 429
    if (err.response?.status === 429) {
      for (let i = 1; i <= 2; i++) {
        await new Promise((r) => setTimeout(r, 1000 * i));
        try {
          const data = await request();
          cache.set(key, data);
          return data;
        } catch {}
      }
    }
    console.error("API error:", err.response?.status, err.response?.data);
    throw err;
  }
}
