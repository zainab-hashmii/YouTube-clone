import React from 'react'
import { Link }  from 'react-router-dom';
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';


const VideoCard = ({video }) => { 
  const videoId = video?.id?.videoId || video?.id;
  const snippet = video?.snippet;

  if(!snippet) return null;

  const title = (snippet.title || demoVideoTitle.slice(0, 60));
  const channelTitle = snippet.channelTitle || demoChannelTitle;
  const thumbUrl =
    snippet?.thumbnails?.high?.url ||
    snippet?.thumbnails?.medium?.url ||
    snippet?.thumbnails?.default?.url ||
    demoThumbnailUrl;

  return (
    <Card sx={{width: {md:'320px', sm: '358px', xs: '100%'}, boxShadow: 'none', borderRadius: 0}}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
      <CardMedia
      component="img"
      image={thumbUrl}
      alt={snippet.title || 'thumbnail'}
      sx={{ width: { xs: '100%', sm: '358px' }, height: 180 }}
      />
      </Link>

      <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px'}}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#fff">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircleIcon sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
          </Typography>
        </Link>
      </CardContent>

    </Card>
  )
}

export default VideoCard