
import { Box, Grid, Typography, TextField, Button, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn, LocationOn, Phone, Email } from '@mui/icons-material';
import { orange } from '@mui/material/colors';

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: '#1a1a2e', color: '#fff', p: 4 }}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                    <Typography variant="h6" sx={{ color: orange[600], mb: 2 }}>Zay Shop</Typography>
                    <Typography variant="body2">
                        <LocationOn sx={{ verticalAlign: 'middle', mr: 1 }} />
                        123 Consectetur at ligula 10660
                    </Typography>
                    <Typography variant="body2">
                        <Phone sx={{ verticalAlign: 'middle', mr: 1 }} />
                        010-020-0340
                    </Typography>
                    <Typography variant="body2">
                        <Email sx={{ verticalAlign: 'middle', mr: 1 }} />
                        info@company.com
                    </Typography>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Typography variant="h6" sx={{ mb: 2 }}>Products</Typography>
                    <Typography variant="body2">Luxury</Typography>
                    <Typography variant="body2">Sport Wear</Typography>
                    <Typography variant="body2">Men Shoes</Typography>
                    <Typography variant="body2">Women Shoes</Typography>
                    <Typography variant="body2">Popular Dress</Typography>
                    <Typography variant="body2">Gym Accessories</Typography>
                    <Typography variant="body2">Sport Shoes</Typography>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Typography variant="h6" sx={{ mb: 2 }}>Further Info</Typography>
                    <Typography variant="body2">Home</Typography>
                    <Typography variant="body2">About Us</Typography>
                    <Typography variant="body2">Shop Locations</Typography>
                    <Typography variant="body2">FAQs</Typography>
                    <Typography variant="body2">Contact</Typography>
                </Grid>
            </Grid>

            <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box>
                    <IconButton href="#" sx={{ color: '#fff' }}>
                        <Facebook />
                    </IconButton>
                    <IconButton href="#" sx={{ color: '#fff' }}>
                        <Twitter />
                    </IconButton>
                    <IconButton href="#" sx={{ color: '#fff' }}>
                        <Instagram />
                    </IconButton>
                    <IconButton href="#" sx={{ color: '#fff' }}>
                        <LinkedIn />
                    </IconButton>
                </Box>
                <Box sx={{ display: 'flex' }}>
                    <TextField
                        variant="outlined"
                        placeholder="Email address"
                        size="small"
                        sx={{ input: { color: '#fff' }, '& .MuiOutlinedInput-root': { borderColor: orange[600] }, '& .MuiOutlinedInput-notchedOutline': { borderColor: orange[600] },  '&:focus': {
                            outline: orange[600],
                        }, }}
                    />
                    <Button variant="contained" sx={{
                        ml: 2, backgroundColor: orange[600], '&:hover': {
                            backgroundColor: orange[600],
                        }, color: '#1a1a2e'
                    }}>Subscribe</Button>
                </Box>
            </Box>
        </Box>
    );
}

export default Footer;
