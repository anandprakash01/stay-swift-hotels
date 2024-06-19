import React from "react";
import {useNavigate} from "react-router";

// firebase import
import {auth, provider} from "../firebase";
import {signInWithPopup} from "firebase/auth";

import {Button, Container, Grid, TextField, Typography} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

const Login = () => {
  const navigate = useNavigate();

  const handleLoginWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        // console.log(result);
        const userName = result.user.displayName;
        const userEmail = result.user.email;
        const userPhoto = result.user.photoURL;
        navigate("/", {
          state: {
            userName,
            userEmail,
            userPhoto,
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
        <Typography
          variant="h4"
          component="h4"
          sx={{
            color: "#254336",
            fontWeight: "700",
            textAlign: "center",
            mt: "3rem",
          }}
        >
          Login
        </Typography>

        <Grid container spacing={2} sx={{textAlign: "center", margin: "2rem 0"}}>
          <Grid item lg={12} xs={12}>
            <TextField
              onChange={e => setEmail(e.target.value)}
              required
              type="email"
              id="outlined-required"
              label="Email"
              sx={{width: "17rem"}}
            />
          </Grid>
          <Grid item lg={12} xs={12}>
            <TextField
              onChange={e => setPassword(e.target.value)}
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              sx={{width: "17rem"}}
            />
          </Grid>
          <Grid item lg={12} xs={12}>
            <Button
              onClick={handleLogin}
              sx={{
                textTransform: "capitalize",
                border: "1px solid green",
                backgroundColor: "transparent",
                color: "#1976d2",
                width: "17rem",
                "&:hover": {
                  backgroundColor: "#254336",
                  color: "#E7D37F",
                },
              }}
              variant="contained"
            >
              Login
            </Button>
          </Grid>

          <Grid item lg={12} xs={12}>
            <Button
              onClick={handleLoginWithGoogle}
              sx={{
                textTransform: "capitalize",
                border: "1px solid green",
                gap: "0.5rem",
                width: "17rem",
                "&:hover": {
                  backgroundColor: "#254336",
                  color: "#E7D37F",
                },
              }}
            >
              <GoogleIcon />
              <span>Login with Google</span>
            </Button>
          </Grid>
          <Grid item lg={12} xs={12}>
            <Typography>
              Need help ?{" "}
              <Button
                onClick={() => {
                  navigate("/create-account");
                }}
                sx={{
                  "&:hover": {
                    color: "#254336",
                  },
                }}
              >
                Create Account
              </Button>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Login;
