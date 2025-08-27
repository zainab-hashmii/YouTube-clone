import React from 'react'
import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom'; 

import Videos from './Videos';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const SearchFeed = () => {

  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
      fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => setVideos(data.items))
    }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: 'auto', p: 2, minWidth: 0, flex: 1 }}>
      <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }}>
        Search Results for: <span style={{ color: '#F31502' }}>
          { searchTerm }
        </span>
        videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  )
}

export default SearchFeed