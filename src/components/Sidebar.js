import React from 'react'
import {categories} from "../utils/constants"
import { Stack } from '@mui/material'

const Sidebar = ({ setselectedcat, selectedcat }) => {
  return (
    <>
      <Stack
        direction={"row"}
        sx={{ flexDirection: { md: "column" }, overflowY: "auto" }}
      >
        {categories.map((cur) => {
          return (
            <button
            key={cur.name}
            onClick={()=>setselectedcat(cur.name)}
              className="category-btn"
              style={{
                background: cur.name === selectedcat && "#FC1503",
                color: "white",
              }}
            >
              <span
                style={{
                  color: cur.name === selectedcat ? "white" : "red",
                  marginRight: "15px",
                }}
              >
                {cur.icon}
              </span>
              <span style={{ opacity: cur.name === selectedcat ? "1" : "0.8" }}>
                {cur.name}
              </span>
            </button>
          );
        })}
      </Stack>
    </>
  );
};

export default Sidebar