import {Typography} from "@mui/material";
import React from "react";

const CommingSoon = () => {
  return (
    <>
      <Typography
        variant="h5"
        component="h5"
        sx={{
          color: "#254336",
          fontWeight: "700",
          height: "70vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "1rem 3rem",
        }}
      >
        This Feature is Comming Soon, We are working on it.
      </Typography>
    </>
  );
};

export default CommingSoon;
