import React from 'react';
import { Box, Stack } from '@mui/material';
import VideoCard from './VideoCard';

const Videos = ({ videos = [] }) => (
  <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
    {videos
      .filter(v => !!v?.snippet) // skip bad items
      .map((item, idx) => (
        <Box key={item?.id?.videoId || item?.id?.channelId || idx}>
          <VideoCard video={item} />
        </Box>
      ))}
  </Stack>
);

export default Videos;
