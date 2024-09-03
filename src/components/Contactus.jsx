import { Grid, Typography, TextField, Button, Box } from '@mui/material';
import { orange } from '@mui/material/colors';

export default function Contactus() {
    
    return (
        <Grid container spacing={3} sx={{ p: 3 }}>
            <Grid item xs={12} md={6}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                    <Typography variant="h4" sx={{ mt: 2 }}>
                        CONTACT US
                    </Typography>
                    <Typography variant="h6" sx={{ my: 4 }}>
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.
                    </Typography>
                    <img
                        src="https://i.pinimg.com/236x/b6/d5/fd/b6d5fdd922523191ea3c31f8eec47992.jpg"
                        alt="Placeholder"
                        style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                    />
                </Box>
            </Grid>
            <Grid item xs={12} md={6}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 , justifyContent: 'center', pt:{xs:4, lg:24} }}>
                    <TextField
                        label="Name"
                        variant="outlined"
                        fullWidth
                        color="warning"
                        InputLabelProps={{ sx: { color: 'text.secondary' } }}
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        color="warning"
                        InputLabelProps={{ sx: { color: 'text.secondary' } }}
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        label="Message"
                        variant="outlined"
                        multiline
                        color="warning"
                        rows={4}
                        fullWidth
                        InputLabelProps={{ sx: { color: 'text.secondary' } }}
                        sx={{ mb: 2 }}
                    />
                    <Button
                        variant="contained"
                        color='warning'
                        sx={{
                           
                            '&:hover': {
                                backgroundColor: orange[600],
                            },
                        }}
                    >
                        Send
                    </Button>
                </Box>
            </Grid>
        </Grid>
    );
}
