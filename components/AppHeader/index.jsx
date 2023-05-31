import { AppBar, InputBase, Toolbar, Grid, Stack } from "@mui/material";
import { styled } from "@mui/system";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Outlet, useNavigate, Route, Routes } from "react-router-dom";
import logo from "../../assets/titleIcon.png";
import * as React from "react";
import {
  Box,
  Avatar,
  TextField,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
  IconButton,
  Typography,
  Tooltip,
} from "@mui/material";
import {
  PersonAdd,
  Settings,
  Logout,
  Assignment,
  Face,
  ShoppingCartRounded,
  Notifications,
  Search,
} from "@mui/icons-material";
import { green, pink } from "@mui/material/colors";
import { appHeaderStyle } from "./style";

const Logo = styled("img")({
  maxWidth: "150px",
  marginRight: "8px",
  marginLeft: "20px",
});

const Title = styled(Typography)({
  flexGrow: 1,
});

function AppHeader() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [username, setUsername] = React.useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = appHeaderStyle();

  const firstName = localStorage.getItem("firstName");
  const lastName = localStorage.getItem("lastName");

  React.useEffect(() => {
    // Get the username from local storage if it exists
    const storedUsername = firstName + " " + lastName;
    if (firstName != null && lastName != null) {
      setLoggedIn(true);
      setUsername(storedUsername);
    }
  }, [firstName, lastName, loggedIn]);

  let navigate = useNavigate();

  function handleClickingLogout() {
    navigate("/login");
  }

  function handleClickingLogo() {
    navigate("/products");
  }

  const handleLogout = () => {
    // Clear the username from local storage and set logged in to false
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    setLoggedIn(false);
    setUsername("");
    console.log("Logged out button clicked");
    console.log("firstName is " + localStorage.getItem("firstName"));
    console.log("lastName is " + localStorage.getItem("lastName"));
    handleClickingLogout();
  };

  const theme = createTheme();
  return (
    <>
    <ThemeProvider theme={theme}>
      <AppBar position="fixed" className={classes.header}>
        <Toolbar>
          <Grid container spacing={2}>
            <Grid item xs={2} className={classes.logoImageSection}>
              <Logo
                src={logo}
                alt="Logo"
                onClick={handleClickingLogo}
                style={{ cursor: "pointer" }}
                sx={{
                  width: 28,
                  height: 28,
                }}
              />
            </Grid>

            <React.Fragment>
              <Grid item xs={8} className={classes.paraSection}>
                <Stack spacing={5} direction="row" className={classes.paraStack}>
                  <Typography
                    variant="h4"
                    className={`${classes.appHeaderPara}`}
                  >
                    Home
                  </Typography>
                  <Typography
                    variant="h4"
                    className={`${classes.appHeaderPara}`}
                  >
                    Products
                  </Typography>
                  <Typography
                    variant="h4"
                    className={`${classes.appHeaderPara}`}
                  >
                    Services
                  </Typography>
                  <Typography
                    variant="h4"
                    className={`${classes.appHeaderPara}`}
                  >
                    About us
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={2}>
                <Tooltip title="Account settings">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <Avatar
                      sx={{
                        width: 32,
                        height: 32,
                        backgroundColor: "#1976d2",
                        color: "white",
                      }}
                    ></Avatar>
                  </IconButton>
                </Tooltip>


                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      "&:before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <MenuItem onClick={handleClose}>
                    <Avatar sx={{ bgcolor: pink[500] }}>
                      <Face />
                    </Avatar>{" "}
                    Profile
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Avatar sx={{ bgcolor: green[500] }}>
                      <Assignment />
                    </Avatar>{" "}
                    Order's
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <PersonAdd fontSize="small" sx={{ color: "#1e88e5" }} />
                    </ListItemIcon>
                    24/7 Customer Care
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <Settings fontSize="small" sx={{ color: "#212121" }} />
                    </ListItemIcon>
                    Settings
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </Grid>
            </React.Fragment>
           
          </Grid>
          
        </Toolbar>
       
      </AppBar >
     
    </ThemeProvider >
   
     </>
  );
}

export default AppHeader;
