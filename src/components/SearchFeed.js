import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import {Videos } from "./";
import { Typography } from "@mui/material";
import { FetchfromApi } from "../utils/FetchfromApis";
import { useParams } from "react-router-dom";
const SearchFeed = () => {
  const [videos, setvideos] = useState([]);
  const {searchTerm}=useParams()
  useEffect(() => {
    FetchfromApi(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setvideos(data.items);
    })
  }, [searchTerm]);
  return (
    <>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Box p={10}>
          <Typography
            variant="h4"
            fontWeight={"bold"}
            marginBottom={2}
            sx={{ color: "white" }}
          >
            {searchTerm}
            <span style={{ color: "#FC1503", marginLeft: "1rem" }}>Videos</span>
          </Typography>
          <Videos videos={videos} />
        </Box>
      </Box>
    </>
  );
};

export default SearchFeed;
