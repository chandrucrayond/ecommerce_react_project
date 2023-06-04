import React from 'react';
import { Grid } from '@mui/material';
import { productListingSectionStyle } from './style';
import ProductCard from '../Card/index';
import { jsonData } from '../ProductsJson';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import FilterSection from '../FilterSection';

export default function ProductListingPage() {
  const productArray = jsonData;
  const reversedProductArray = productArray.slice().reverse();

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

      <Fab color="primary" sx={{position:'fixed', bottom:'20px', right:'20px'}}>
       
        <FilterSection />
        <AddIcon /> 
      </Fab>
    </Grid>
  );
}
