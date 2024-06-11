import React, {useEffect, useState} from "react";
import {Container, Grid} from "@mui/material";
import axios from "axios";

import HotelCard from "../components/HotelCard";

const Home = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    axios
      .get("https://hotels-api-4ltr.onrender.com/api/hotels")
      .then(response => {
        // console.log(response.data);
        setHotels(response.data);
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
        <Grid container spacing={3}>
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
