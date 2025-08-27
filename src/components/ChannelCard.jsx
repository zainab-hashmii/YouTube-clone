import React from 'react';
import { Box, Card, CardContent, CardMedia, CardActionArea, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';

const ChannelCard = ({ channelDetail, marginTop}) => {
  const s = channelDetail?.snippet;
  const channelId = channelDetail?.id?.channelId || channelDetail?.id;
  const avatar =
    s?.thumbnails?.high?.url ||
    s?.thumbnails?.medium?.url ||
    s?.thumbnails?.default?.url ||
    demoProfilePicture;

  return (
    <Box sx={{
      boxShadow: 'none',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: { xs: '356px', md: '320px' },
      height: '326px',
      margin: 'auto',
      marginTop
    }}
    >
      <Card sx={{ background: 'transparent', boxShadow: 'none' }}>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            color: '#fff',
          }}
        >
          <CardActionArea
            component={Link}
            to={channelId ? `/channel/${channelId}` : '#'}
            sx={{
              borderRadius: '50%',
              overflow: 'hidden',
              width: 180,
              height: 180,
              mb: 2,
              border: '1px solid #e3e3e3',
            }}
          >
            <CardMedia
              component="img"
              image={avatar}
              alt={s?.title || 'Channel avatar'}
              sx={{ width: '100%', height: '100%' }}
            />
          </CardActionArea>

          <Typography variant="h6">
            {s?.title || 'Channel'}
            <CheckCircleIcon sx={{ fontSize: 14, color: 'gray', ml: 0.5 }} />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography>
              {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
            </Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default ChannelCard;
