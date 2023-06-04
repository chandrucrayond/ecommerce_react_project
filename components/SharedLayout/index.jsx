import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, Box, Grid } from '@mui/material';
import AppHeader from '../AppHeader';
import FilterSection from '../FilterSection';
import FooterSection from '../Footer/index';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

function SharedLayout() {

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  });

  const isMdScreen = useMediaQuery(() => theme.breakpoints.down('lg'));

  return (
    <Container>
      <AppHeader />
    
      <div sx={{ display: 'flex', flexDirection: 'column', margin: 0, padding: 0 }}>
     
        <Container sx={{ flexGrow: 1, minHeight: '70vh', mt: 14, mb: 10 }}>
          <Grid container spacing={5}>
          
            <Grid item lg={3} style={{ display: isMdScreen ? 'none' : '' }}>
              <FilterSection/>
            </Grid>

            <Grid item lg={9}>
              <Outlet />
            </Grid>
          </Grid>
        </Container>

      </div>
      <FooterSection />
      <br />
     

    </Container>
  );
}

export default SharedLayout;
