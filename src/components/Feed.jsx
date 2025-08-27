import React from 'react'
import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import SideBar from './SideBar';
import Videos from './Videos';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => setVideos(data.items))
  }, [selectedCategory]);
  
  return (
    <Stack direction={{ xs: 'column', md: 'row' }} sx={{ minHeight: '100vh' }}>
      <Box sx={{
          position: { md: 'sticky' },
          top: 0,
          minHeight: { xs: 'auto', md: '100vh' },       
          width: { xs: '100%', md: 240 },
          flexShrink: 0,
          borderRight: { md: '1px solid #3d3d3d' },
          borderBottom: { xs: '1px solid #3d3d3d', md: 'none' },
          px: { xs: 0, md: 2 },
          display: 'flex',
          flexDirection: 'column',
        }}>
        <SideBar 
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        />
          <Typography className="copyright" variant="body2" sx={{ mt: "auto", pb: 2, color: '#fff', opacity: 0.7}}>
            Copyright 2022 JSM Media
          </Typography>
       

      </Box>

      <Box p={2} sx={{ overflowY : 'auto', p: 2, minWidth: 0, flex: 1 }}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{color:'white'}}>
          { selectedCategory }<span style={{color: '#F31502'}}>
            videos
          </span>
        </Typography>

        <Videos videos={videos}/>
      </Box>

    </Stack>
  )
}

export default Feed