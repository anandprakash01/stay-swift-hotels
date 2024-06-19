import React, {useState} from "react";

import {useLocation, useNavigate} from "react-router";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import {getApp} from "firebase/app";

const NavBar = () => {
  const navbarButtonStyle = {
    color: "white",
    display: "block",
    "&:hover": {backgroundColor: "#E7D37F", color: "#365E32"},
  };

  const loginLogoutButton = {
    color: "white",
    textTransform: "capitalize",
    margin: "0 1rem",
    "&:hover": {backgroundColor: "#E7D37F", color: "#365E32"},
  };

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const locationDetails = useLocation();

  const navigate = useNavigate();

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#365E32",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: {xs: "none", md: "flex"},
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#E7D37F",
              textDecoration: "none",
              userSelect: "none",
            }}
          >
            Stay Swift
          </Typography>

          {/* menu for small screen */}
          <Box sx={{flexGrow: 1, display: {xs: "flex", md: "none"}}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: {xs: "block", md: "none"},
              }}
            >
              <MenuItem
                onClick={handleCloseNavMenu}
                sx={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}
              >
                <Typography>Home</Typography>
                <Typography>Places</Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: {xs: "flex", md: "none"},
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#E7D37F",
              textDecoration: "none",
            }}
          >
            Stay Swift
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: {xs: "none", md: "flex"},
            }}
          >
            <Button
              onClick={() => {
                navigate("/");
              }}
              sx={navbarButtonStyle}
            >
              Home
            </Button>
            <Button
              onClick={() => {
                navigate("/places");
              }}
              sx={navbarButtonStyle}
            >
              Places
            </Button>
          </Box>

          {/* menu for small screen */}

          <Box sx={{flexGrow: 0}}>
            <Tooltip title={locationDetails.state?.userName}>
              <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                <Avatar
                  alt="Anand Prakash"
                  src="https://picsum.photos/200/300?grayscale"
                />
              </IconButton>
            </Tooltip>
            {locationDetails.state?.userName ? (
              <Button sx={loginLogoutButton}>Logout</Button>
            ) : (
              <Button
                sx={loginLogoutButton}
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </Button>
            )}

            <Menu
              sx={{mt: "45px", minHeight: "6rem"}}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem
                onClick={handleCloseUserMenu}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  padding: "3px 10px",
                }}
              >
                <Typography
                  onClick={() => {
                    navigate("/account");
                  }}
                >
                  Account
                </Typography>
                {locationDetails.state?.userName ? (
                  <Typography>Logout</Typography>
                ) : (
                  <Typography
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    Login
                  </Typography>
                )}
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
