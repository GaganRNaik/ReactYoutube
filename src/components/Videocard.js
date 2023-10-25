import { Card,CardContent,CardMedia,Typography } from "@mui/material"
import { Link } from "react-router-dom"
import {demoChannelUrl,demoChannelTitle,demoVideoTitle} from "../utils/constants"
import { CheckCircle } from "@mui/icons-material"

const Videocard = ({video:{id:{videoId},snippet}}) => {
  return (
    <Card  sx={{width:{xs:'100%',sm:'358px',md:'320px'},borderRadius:'0',boxShadow:"none"}}>
      <Link to={videoId ? `/video/${videoId}` : demoChannelUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width:{xs:'100%',sm:'358px',md:'320px'}, height: 180 ,}}
        ></CardMedia>
      </Link>
      <CardContent sx={{ background: "#1e1e1e", height: "106px" }}>
        <Link to={videoId ? `/video/${videoId}` : demoChannelUrl}>
          <Typography variant="subtitle1" color={"#fff"} fontWeight={"bold"}>
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography variant="subtitle2" fontWeight={"bold"} color={"grey"}>
            {snippet?.channelTitle||demoChannelTitle}
            <CheckCircle sx={{ml:"5px",fontSize:16,color:"grey"}}/>
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
}

export default Videocard