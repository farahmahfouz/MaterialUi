import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import { orange } from "@mui/material/colors";

export default function CircleCards() {
  const items = [
    {
      title: "Watches",
      image: "https://i.pinimg.com/236x/5e/82/76/5e82760a95ce131cea65f4704a1d4e61.jpg",
    },
    {
      title: "Shoes",
      image: "https://i.pinimg.com/236x/f7/c7/92/f7c79238c21cbe4e1ab99c6d11b77ccf.jpg",
    },
    {
      title: "Accessories",
      image: "https://i.pinimg.com/236x/b0/2c/da/b02cdaec432e18ef84028f3c4d48f025.jpg",
    },
  ];

  return (
    <Grid container spacing={4} justifyContent="center" sx={{ mt: 5 }}>
      {items.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card
            elevation={0}
            sx={{
              maxWidth: 345,
              mx: "auto",
              textAlign: "center",
              border: "none", // Optional: Add a light border
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image={item.image}
              alt={item.title}
              sx={{
                width: 200,
                height: 200,
                borderRadius: "50%",
                objectFit: "cover",
                mx: "auto",
                mt: 2,
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Button
                variant="contained"
                color="warning"
                sx={{
                  "&:hover": {
                    backgroundColor: orange[600],
                  },
                }}
              >
                Go Shop
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
