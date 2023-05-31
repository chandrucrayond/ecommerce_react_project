// import React from 'react';
// import { productListingSectionStyle } from './style';
// import ProductCard from '../Card/index';
// import { jsonData } from '../ProductsJson';

// export default function ProductListingPage() {
//     const productArray = jsonData;
//     return (
//         <div>
//             {productArray.map((value, index) => (
//                 <ProductCard key={index} product={value} />
//             ))}
//         </div>

//     );
// }

import React from 'react';
import { Grid } from '@mui/material';
import { productListingSectionStyle } from './style';
import ProductCard from '../Card/index';
import { jsonData } from '../ProductsJson';

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
      </Grid>
    );
  }
  