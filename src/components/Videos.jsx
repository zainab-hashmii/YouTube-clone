// src/components/Videos.jsx
import React from "react";
import { Box, Stack } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

const Videos = ({ videos, direction = [] }) => {
  if(!videos?.length) return 'Loading...';

  <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" gap={2}>
    {videos
      .filter((v) => !!v?.snippet) // skip weird items
      .map((item, idx) => {
        const vId = item?.id?.videoId || (typeof item?.id === "string" ? item.id : null);
        const cId = item?.id?.channelId;
        return (
          <Box key={vId || cId || idx}>
            {vId ? <VideoCard video={item} /> : <ChannelCard channelDetail={item} />}
          </Box>
        );
      })}
  </Stack>
};

export default Videos;
