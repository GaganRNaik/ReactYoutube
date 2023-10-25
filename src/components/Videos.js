import React from 'react'
import { Stack } from '@mui/material'
import {Videocard,Channelcard} from './'
const Videos = ({ videos,direction}) => {
  if(!videos) return <p>Load..</p>
  return (
    <>
      <Stack
        direction={direction||"row"}
        flexWrap={"wrap"}
        gap={2}
        justifyContent={"start"}
  
      >
        {videos.map((item, id) => {
          return (
            <div key={id}>
              {item.id.channelId && <Channelcard channeldetail={item} />}
              {item.id.videoId && <Videocard video={item} />}
            </div>
          );
        })}
      </Stack>
    </>
  );
};

export default Videos