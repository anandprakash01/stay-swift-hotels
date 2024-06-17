import React from "react";
import {useNavigate} from "react-router";

// firebase import
import {auth, provider} from "../firebase";
import {signInWithPopup} from "firebase/auth";

import {Button, Container, Grid, TextField} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

const Login = () => {
  const navigate = useNavigate();

  const handleLoginWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        // console.log(result);
        const userName = result.user.displayName;
        navigate("/home", {
          state: {
            userName,
          },
        });
      })
      .catch(err => {
        console.log("ERROR: ", err);
      });
  };

  const handleLogin = () => {};

  return (
    <>
      <Container>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{height: "100vh"}}
        >
          <Grid item lg={12}>
            <TextField
              onChange={e => setEmail(e.target.value)}
              required
              type="email"
              id="outlined-required"
              label="Email"
            />
            <TextField
              onChange={e => setPassword(e.target.value)}
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
            />
            <Button onClick={handleLogin} variant="contained">
              Login
            </Button>
          </Grid>
        </Grid>
        <Grid
          //   alignItems="center"
          alignContent="center"
          justifyContent="center"
          container
          sx={{height: "100vh"}}
        >
          <Grid item>
            <button
              onClick={handleLoginWithGoogle}
              style={{
                height: "40px",
                color: "#fff",
                backgroundColor: "#1976d2",
                borderRadius: "5px",
                fontSize: "20px",
                padding: "5px",
                border: "none",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 10,
                cursor: "pointer",
                userSelect: "none",
              }}
            >
              <GoogleIcon />
              <span>Login with Google</span>
            </button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Login;
