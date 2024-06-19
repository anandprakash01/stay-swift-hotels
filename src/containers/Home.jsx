import React, {useEffect, useState} from "react";
import {useLocation} from "react-router";

import "../loader.css";

import {Container, Grid, Typography} from "@mui/material";
import axios from "axios";

import HotelCard from "../components/HotelCard";
// import NavBar from "../components/NavBar";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [hotels, setHotels] = useState([]);
  const locationDetails = useLocation();
  // console.log(locationDetails);

  useEffect(() => {
    axios
      .get("https://hotels-api-4ltr.onrender.com/api/hotels")
      .then(response => {
        // console.log(response.data);
        setHotels(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          // marginTop: "5rem",
          mt: "5rem",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            margin: "1rem",
            fontStyle: "italic",
            color: "#254336",
          }}
          component="h4"
        >
          {locationDetails?.state?.userName &&
            `Welcome, ${locationDetails.state.userName}`}
        </Typography>
        {loading && <div className="loader"></div>}
        <Grid container spacing={3} justifyContent={"center"}>
          {hotels.map(hotel => {
            return (
              <Grid key={hotel.id} item md={4}>
                <HotelCard hotel={hotel} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default Home;
