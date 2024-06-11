import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {CardActionArea, Rating} from "@mui/material";
import {useNavigate} from "react-router";

const HotelCard = ({hotel}) => {
  // console.log(hotel);

  const navigate = useNavigate();

  const onCardClick = () => {
    navigate(`/hotel-details/${hotel.slug}`);
  };

  return (
    <>
      <Card onClick={onCardClick} sx={{maxWidth: 400, marginBottom: "2rem"}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={hotel.thumbnail}
            alt={hotel.name}
          />
          <CardContent sx={{height: 170}}>
            <Typography sx={{}} gutterBottom variant="h6" component="div">
              {hotel.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {hotel.address}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {/* ₹ {hotel.pricePerNight * 70} / Night */}
            </Typography>
            <Rating name="read-only" value={Math.floor(hotel.rating)} readOnly />
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default HotelCard;
