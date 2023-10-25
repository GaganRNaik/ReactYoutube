import { Videos,Channelcard } from "./"
import { FetchfromApi } from "../utils/FetchfromApis"
import { useState,useEffect} from "react"
import { useParams } from "react-router-dom"
import { Box } from "@mui/material"


const ChannelDetail = () => {
  const [channeldetail,setChanneldetail]=useState(null)
  const [videos,setVideos]=useState([])
  const {id}=useParams()
  useEffect(() => {
    FetchfromApi(`channels?part=snippet&id=${id}`).then((data) =>
      setChanneldetail(data?.items[0])
    );
  }, [id]);
  useEffect(() => {
    FetchfromApi(`search?channelId=${id}&part=snippet&order=date`).then((data) =>
      setVideos(data?.items)
      
    );
  }, [id]);
  return (
    <Box minHeight={"95vh"}>
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%)",
            height: "300px",
          }}
        ></div>
        <Channelcard channeldetail={channeldetail} marginTop="-110px" />
      </Box>
      <Box display="flex" p="2" >
          <Box sx={{mr:{sm:"100px"}}}/>
        <Videos  videos={videos}/>
      </Box>
    </Box>
  );
}

export default ChannelDetail