import React, { useState, useEffect, useRef } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Popover from '@mui/material/Popover';
import { productListingSectionStyle } from './style';
import ProductCard from '../Card/index';
import Fab from '@mui/material/Fab';
import FilterSection from '../FilterSection';
import EndOfProduct from '../EndOfProduct';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

export default function ProductListingPage({ productArray }) {


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

  console.log('productArray :', productArray);

  return (

    <Grid container spacing={5} className={classes.listingPageContainer}>
      {productArray.map((value, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <ProductCard product={value} />
        </Grid>
      ))}


      <Box style={{ display: isLgScreen ? 'none' : '' }}>

      </Box>
      <Grid item xs={12} style={{ textAlign: 'center', paddingTop: 0, }}>
        <EndOfProduct />
      </Grid>

    </Grid >
  );
}
