import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, Box } from '@mui/material';
import AppHeader from '../components/AppHeader';

function SharedLayout() {
  return (
    <>
      <AppHeader />
      <Box sx={{ display: 'flex', flexDirection: 'column', margin: 0, padding: 0 }}>

        <Container sx={{ flexGrow: 1, minHeight: '70vh', mt: 14, mb: 10 }}>
          <Outlet />
        </Container>

      </Box>
      <hr></hr>
      <Box display={'flex'} position="relative" sx={{ display: 'flex', textAlign: 'center', fontWeight: 'bolder', minHeight: '10vh', top: 'auto', bottom: 0, alignItems: "center", justifyContent: "space-around", }}>
        <Typography variant="p"  >
        © 2007-2023 Google Inc
        </Typography>
        <div>
          <Typography variant="p"  >
            Terms & Conditions
          </Typography>
          <Typography variant="p"  >
            Privacy
          </Typography>
          <Typography variant="p"  >
            Career
          </Typography>
        </div>
      </Box>

    </>
  );
}

export default SharedLayout;
