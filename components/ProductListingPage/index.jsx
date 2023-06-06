import React, { useState, useEffect, useRef } from 'react';
import { Box, Grid, Typography } from '@mui/material';
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
  const reversedProductArray = productArray.slice().reverse();
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

  const filterSectionRef = useRef(null);
  const [isFilterSectionOpen, setIsFilterSectionOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterSectionRef.current && !filterSectionRef.current.contains(event.target)) {
        setIsFilterSectionOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleToggleFilterSection = () => {
    setIsFilterSectionOpen((prevState) => !prevState);
  };


  return (
    <Grid container spacing={5}>
      {productArray.map((value, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <ProductCard product={value} />
        </Grid>
      ))}

      {reversedProductArray.map((value, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <ProductCard product={value} />
        </Grid>
      ))}

      {productArray.map((value, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <ProductCard product={value} />
        </Grid>
      ))}

      <Fab size="small" color="primary" sx={{ position: 'fixed', bottom: '20px', right: '20px' }} style={{ display: isLgScreen ? 'none' : '' }} className={classes.filterIconButton}
      ref={filterSectionRef}>
        <TuneIcon onClick={handleToggleFilterSection} />
      </Fab>
      {isFilterSectionOpen && <FilterSection />}

      <Grid item xs={12} style={{ textAlign: 'center', paddingTop: 0, }}>
        <EndOfProduct />
      </Grid>

    </Grid>
  );
}
