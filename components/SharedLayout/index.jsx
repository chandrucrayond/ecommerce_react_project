import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, Box, Grid } from '@mui/material';
import AppHeader from '../AppHeader';
import FilterSection from '../FilterSection';
import FooterSection from '../Footer/index';

function SharedLayout() {
  return (
    <>
      <AppHeader />
    
      <div sx={{ display: 'flex', flexDirection: 'column', margin: 0, padding: 0 }}>
     
        <Container sx={{ flexGrow: 1, minHeight: '70vh', mt: 14, mb: 10 }}>
          <Grid container spacing={5}>
          
            <Grid item lg={3}>
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
     

    </>
  );
}

export default SharedLayout;
