import React from 'react'
import { Box,CardContent, CardMedia,Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { CheckCircle } from '@mui/icons-material'

const Channelcard = ({ channeldetail, marginTop }) => {
  console.log(channeldetail);
  return (
    <Box
      sx={{
        width: { md: "320px", xs: "356px" },
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "326px",
        margin: "auto",
        marginTop,
      }}
    >
      <Link to={`channel/${channeldetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            alt={channeldetail?.snippet?.title}
            sx={{ width: "180px", height: "180px", borderRadius: "50%" }}
            image={channeldetail?.snippet?.thumbnails?.high?.url}
          />
          <Typography variant="h6">
            {channeldetail?.snippet?.title}
            <CheckCircle sx={{ ml: "5px", fontSize: 16, color: "gray" }} />
          </Typography>
          {channeldetail?.statistics?.subscriberCount && (
            <Typography
              sx={{ fontSize: "15px", fontWeight: 500, color: "gray" }}
            >
              {parseInt(
                channeldetail?.statistics?.subscriberCount
              ).toLocaleString("en-US")}
              Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default Channelcard