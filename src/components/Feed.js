import React, { useState, useEffect } from "react";
import { Stack,Box } from '@mui/material'
import {Sidebar,Videos} from './'
import {Typography} from '@mui/material'
import {FetchfromApi} from "../utils/FetchfromApis"
const Feed = () => {
    const [selectedcat,setselectedcat]=useState("New")
    const [videos,setvideos]=useState([])
  useEffect(() => {
   FetchfromApi(`search?part=snippet&q=${selectedcat}`).then((data)=>{
    setvideos(data.items)
   })
  }, [selectedcat]);
  return (
    <>
      <Stack
        sx={{ flexDirection: { sx: "column", md: "row" }, overflow: "auto" }}
      >
        <Box
          sx={{
            height: { sx: "auto", md: "92vh" },
            borderRight: "1px solid #3d3d3d",
            px: { md: "10px", sx: 0 },
          }}
        >
          <Sidebar selectedcat={selectedcat} setselectedcat={setselectedcat} />
          <Typography
            className="copyright"
            variant="body2 "
            sx={{ mt: 1.5, color: "#fff" }}
          >
            Copyright 2022 JSM Media
          </Typography>
        </Box>
        <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
          <Typography
            variant="h4"
            fontWeight={"bold"}
            marginBottom={2}
            sx={{ color: "white" }}
          >
            {selectedcat}
            <span style={{ color: "#FC1503", marginLeft: "1rem" }}>Videos</span>
          </Typography>
          <Videos videos={videos} />
        </Box>
      </Stack>
    </>
  );
}

export default Feed