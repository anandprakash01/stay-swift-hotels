import React from "react";

import {Avatar, Typography} from "@mui/material";
import {useLocation} from "react-router";

const UserAccount = () => {
  const userDetail = useLocation();
  //   console.log(userDetail);

  return (
    <>
      <div
        className="user"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "5rem 0",
          gap: "3rem",
        }}
      >
        <Avatar
          alt="Anand Prakash"
          src="https://picsum.photos/200/300?grayscale"
          sx={{width: "10rem", height: "10rem"}}
        />
        <div className="user-details">
          <Typography variant="h4" component="h4">
            Anand Prakash
          </Typography>
          <p>ap.anandprakash21@gmail.com</p>
        </div>
      </div>
    </>
  );
};

export default UserAccount;
