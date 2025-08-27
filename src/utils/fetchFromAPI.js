import axios from 'axios';

const api = axios.create({
  baseURL: 'https://youtube-v31.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
});

export async function fetchFromAPI(path, params = {}) {
  const clean = String(path).replace(/^\//, '');
  const { data } = await api.get(`/${clean}`, {
    params: { maxResults: 50, ...params },
  });
  return data;
}
