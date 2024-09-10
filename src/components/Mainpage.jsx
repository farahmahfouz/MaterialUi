import Typography from '@mui/material/Typography';

export default function Mainpage() {
    

    return (
        <div >
        <Typography gutterBottom variant="h4" component="p" sx={{fontSize: {sm: "50px"}}}>
            Featured Product
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{p: {xs: "4px", sm: "8px"}}}>
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
      </Typography>
     
        </div>
    )
}
