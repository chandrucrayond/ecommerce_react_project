import React,{useState} from 'react';
import { Grid } from '@mui/material';
import { productListingSectionStyle } from './style';
import ProductCard from '../Card/index';
import { jsonData } from '../ProductsJson';
import Fab from '@mui/material/Fab';
import TuneIcon from '@mui/icons-material/Tune';
import FilterSection from '../FilterSection';
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

  const [isFilterSectionOpen, setIsFilterSectionOpen] = useState(false);

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

      <Fab size="small" color="primary" sx={{ position: 'fixed', bottom: '20px', right: '20px' }} style={{ display: isLgScreen ? 'none' : '' }}>

       
          <TuneIcon onClick={handleToggleFilterSection}/>
       

        {isFilterSectionOpen && <FilterSection />}
        {/* {isFilterSectionOpen &&  <Fade in={checked}>{icon}</Fade>/>} */}

      </Fab>
    </Grid>
  );
}
