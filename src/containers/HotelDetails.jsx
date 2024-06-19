import React, {useState, useEffect} from "react";
import {useParams} from "react-router";
import axios from "axios";

import {
  Container,
  Grid,
  List,
  ListItem,
  ListSubheader,
  Rating,
  Typography,
} from "@mui/material";

const HotelDetails = () => {
  const params = useParams();
  //   console.log(params.id);

  const [loading, setLoading] = useState(true);
  const [hotelInfo, setHotelInfo] = useState({});

  useEffect(() => {
    axios
      .get(`https://hotels-api-4ltr.onrender.com/api/hotels/${params.id}`)
      .then(response => {
        console.log(response.data);
        setHotelInfo(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, [params.id]);

  if (loading) {
    return <div className="loader"></div>;
  }

  return (
    <>
      <Container maxWidth="lg" sx={{marginTop: 10}}>
        {/* {loading && <div className="loader"></div>} */}

        <Typography variant="h4" component="h4">
          {hotelInfo.name}
        </Typography>
        <Typography variant="body2" component="div" mt={0}>
          {hotelInfo.address}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ₹ {hotelInfo.pricePerNight * 70} / Night
        </Typography>
        <Rating name="read-only" value={Math.floor(hotelInfo.rating)} readOnly />
        <Typography variant="h5" component="h5" mt={4}>
          About the Hotel
        </Typography>
        <Typography variant="body1" mt={1} component="div">
          {hotelInfo.aboutThePlace}
        </Typography>

        <List sx={{listStyleType: "disc", listStyle: "inside"}}>
          <ListSubheader
            sx={{
              fontWeight: 700,
              lineHeight: "2rem",
              fontSize: "16px",
              color: "black",
              marginLeft: "1rem",
            }}
          >
            Features
          </ListSubheader>

          {hotelInfo.features?.map((feature, i) => {
            return (
              <ListItem key={i} sx={{display: "list-item", fontFamily: "sans-serif"}}>
                {feature.text}
              </ListItem>
            );
          })}
        </List>

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

        {/* <List sx={{listStyleType: "disc", listStyle: "inside"}}>
          {hotelInfo.rooms?.map((room, i) => {
            return (
              <ListItem key={i} sx={{fontFamily: "sans-serif"}}>
                {room.content}
              </ListItem>
            );
          })}
        </List> */}
      </Container>
    </>
  );
};

export default HotelDetails;
