import React, { useState, useEffect, useRef } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Popover from '@mui/material/Popover';
import { productListingSectionStyle } from './style';
import ProductCard from '../Card/index';
import { jsonData } from '../ProductsJson';
import Fab from '@mui/material/Fab';
import TuneIcon from '@mui/icons-material/Tune';
import FilterSection from '../FilterSection';
import EndOfProduct from '../EndOfProduct';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

export default function ProductListingPage() {

  const productArray = jsonData;
  const classes = productListingSectionStyle();

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
  const isLgScreen = useMediaQuery(() => theme.breakpoints.up('lg'));

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);


//handling the state for filter section




  return (
    <Grid container spacing={5} className={classes.listingPageContainer}>
     {/* {selectedCategory==="all"?(

      productArray.map((value, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <ProductCard product={value} />
        </Grid>

      ))
     ):( */}

      {productArray
        // .filter((product) => product.section === selectedCategory)
        .map((value, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProductCard product={value} />
          </Grid>

        ))
        }
     {/* )} */}

      <Box style={{ display: isLgScreen ? 'none' : '' }}>
        <Fab size="small" color="primary" sx={{ position: 'fixed', bottom: '20px', right: '20px' }} className={classes.filterIconButton}
          onClick={handleClick}>
          <TuneIcon />
        </Fab>

        <Popover
          id={"simple-popover"}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }} >

          <FilterSection />

        </Popover>
      </Box>
      <Grid item xs={12} style={{ textAlign: 'center', paddingTop: 0, }}>
        <EndOfProduct />
      </Grid>

    </Grid >
  );
}
