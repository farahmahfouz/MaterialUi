import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Rating } from "@mui/material";
import { useState } from "react";

export default function Cards() {
  const [value] = useState(3);
  return (
    <Card sx={{ maxWidth: 345, mt: 5 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image="https://i.pinimg.com/236x/ea/d8/b8/ead8b8487c7a98aa88908fac93149bbe.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Rating name="read-only" value={value} readOnly />
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}


