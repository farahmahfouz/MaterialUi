import { Box, Typography,IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function ImageComponent() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "500px",
        backgroundColor: "#f5f5f5",
        position: "relative",
      }}
    >
      <IconButton
        sx={{
          position: "absolute",
          left: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1,
          color: 'orange'
        }}
      >
        <ArrowBackIosIcon fontSize="large" />
      </IconButton>


      <Box sx={{ flex: 1, padding: "20px" }}>
        <Typography variant="h4" component="div" gutterBottom>
          Proident occaecat
        </Typography>
        <Typography variant="h6" component="div" color="textSecondary" gutterBottom>
          Aliquip ex ea commodo consequat
        </Typography>
        <Typography variant="body1" component="p">
          You are permitted to use this Zay CSS template for your commercial
          websites. You are <strong>not permitted</strong> to re-distribute the
          template ZIP file in any kind of template collection websites.
        </Typography>
      </Box>

      <Box
        sx={{
          flex: 1,
          backgroundImage:
            "url(https://i.pinimg.com/originals/cd/71/63/cd716355781ca82c6844794337e1fb32.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100%",
          borderRadius: "8px",
        }}
      />

      <IconButton
        sx={{
          position: "absolute",
          right: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1,
          color: 'orange'
        }}
      >
        <ArrowForwardIosIcon fontSize="large" />
      </IconButton>
    </Box>
  );
}
