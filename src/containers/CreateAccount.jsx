import React, {useState} from "react";

import {Button, Container, Grid, TextField, Typography} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

const CreateAccount = () => {
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  return (
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
            onChange={e => setNewUser({...newUser, firstName: e.target.value})}
            required
            type="text"
            id="outlined-required"
            label="First Name"
            sx={{width: "17rem"}}
          />
        </Grid>
        <Grid item lg={12} xs={12}>
          <TextField
            onChange={e => setNewUser({...newUser, lastName: e.target.value})}
            required
            type="text"
            id="outlined-required"
            label="Last Name"
            sx={{width: "17rem"}}
          />
        </Grid>
        <Grid item lg={12} xs={12}>
          <TextField
            onChange={e => setNewUser({...newUser, email: e.target.value})}
            required
            type="email"
            id="outlined-required"
            label="Email"
            sx={{width: "17rem"}}
          />
        </Grid>
        <Grid item lg={12} xs={12}>
          <TextField
            onChange={e => setNewUser({...newUser, password: e.target.value})}
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            sx={{width: "17rem"}}
          />
        </Grid>
        <Grid item lg={12} xs={12}>
          <Button
            onClick={() => {
              console.log(newUser);
            }}
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
            Create Account
          </Button>
        </Grid>

        <Grid item lg={12} xs={12}>
          <Button
            onClick={() => {}}
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
      </Grid>
    </Container>
  );
};

export default CreateAccount;
