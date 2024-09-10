import Typography from '@mui/material/Typography';

export default function FirstMainpage() {
    

    return (
        <div >
        <Typography gutterBottom variant="h4" component="p" sx={{fontSize: {sm: "50px"}}}>
            Categories of The Month
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{p: {xs: "4px", sm: "8px"}}}>
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
      </Typography>
     
        </div>
    )
}
