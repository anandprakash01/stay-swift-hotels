import React, {useState, useEffect} from "react";
import {useParams} from "react-router";
import axios from "axios";

import {Container, Grid, Typography} from "@mui/material";

const HotelDetails = () => {
  const params = useParams();
  //   console.log(params.id);

  const [hotelInfo, setHotelInfo] = useState({});

  useEffect(() => {
    axios
      .get(`https://hotels-api-4ltr.onrender.com/api/hotels/${params.id}`)
      .then(response => {
        // console.log(response.data)
        setHotelInfo(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [params.id]);

  return (
    <>
      <Container maxWidth="lg" sx={{marginTop: 10}}>
        <Typography sx={{marginBottom: "2rem"}} variant="h4">
          {hotelInfo.name}
        </Typography>
        <Grid container justifyContent={"center"}>
          {hotelInfo.images?.map((image, i) => {
            return (
              <Grid key={i} item lg={4}>
                <img
                  src={image.img}
                  alt={hotelInfo.name}
                  style={{
                    width: "95%",
                    borderRadius: "5px",
                    boxShadow: "5px 5px 5px grey",
                    margin: "2rem 0",
                    height: "250px",
                  }}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default HotelDetails;
