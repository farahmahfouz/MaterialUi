import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ImageComponent from "./ImageComponent";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Menu from "@mui/material/Menu";
import Cards from "./Cards";
import Mainpage from "./Mainpage";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import CircleCards from "./CircleCards";
import Contactus from "./Contactus";
import FirstMainpage from "./FirstPage";

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };


  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };


  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Zay
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: "white" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h4"
              component="div"
              color="orange"
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                fontWeight: "bold",
              }}
            >
              Zay
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <Typography
              variant="h5"
              component="div"
              color="orange"
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                fontWeight: "bold",
              }}
            >
              Zay
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                alignItems: "center",
              }}
            >
              {navItems.map((item) => (
                <Button key={item} sx={{ color: "gray" }}>
                  {item}
                </Button>
              ))}
              <IconButton sx={{ color: "black" }}>
                <SearchIcon />
              </IconButton>
              <IconButton sx={{ color: "black" }}>
                <ShoppingCartIcon />
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {["Profile", "Account", "Dashboard", "Logout"].map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography sx={{ textAlign: "center" }}>
                      {setting}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box>
        <Box sx={{ pt: { xs: 4, sm: 4 }, textAlign: "center" }}>
          <ImageComponent />
        </Box>
        <Box sx={{ pt: { xs: 10, sm: 20 }, textAlign: "center" }}>
          <FirstMainpage />
        </Box>
        <Box
          component="main"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Grid>
            <Grid>
              <CircleCards />
            </Grid>
          </Grid>
        </Box>
        <Container>
          <Box sx={{ pt: { xs: 10, sm: 20 }, textAlign: "center" }}>
            <Mainpage />
          </Box>
          <Box
            component="main"
            sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" } }}
          >
            <Toolbar />
            <Grid container spacing={2}>
              {Array(3).fill(null).map((_, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Cards />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
        <Box sx={{ px: { xs: 0, lg: 15 } }}>
          <Contactus />
        </Box>
      </Box>
    </Box>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;


