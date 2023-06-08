import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, Box, Grid, Fab, Popover } from '@mui/material';
import AppHeader from '../AppHeader';
import FilterSection from '../FilterSection';
import FooterSection from '../Footer/index';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import React, { useState } from 'react';
import TuneIcon from '@mui/icons-material/Tune';
import ProductListingPage from '../ProductListingPage';
import { jsonData } from '../ProductsJson';

function SharedLayout() {
  const productArray = jsonData;
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

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  //filter section checkbox state to be managed area

  const [isAllChecked, setIsAllChecked] = useState(false);

  const [filterData, setFilterData] = useState({
    data: [
      {
        name: "Phones",
        value: false,
        key: "phone"
      },
      {
        name: "Headphones",
        value: false,
        key: "headphone"
      },
      {
        name: "Accessories",
        value: false,
        key: "accessories"
      },
    ]
  })

  const handleCheckboxChange = (v, i) => {
    filterData.data[i].value = v;
    setFilterData({ ...filterData });

    if (v === false) {
      setIsAllChecked(false);
    } else {
      const allUnchecked = filterData.data.some((item, index) => index !== i && !item.value);
      setIsAllChecked(!allUnchecked);
    }
  };

  const handleCheckboxChangeAll = (v, i) => {
    var newData = filterData.data.map(v => { return { ...v, value: !isAllChecked } })
    setFilterData({ data: newData });
    setIsAllChecked(!isAllChecked);
  };

  const [selectedCategory, setSelectedCategory] = useState('all');

  const filterNamesByValue = () => {
    const filteredNames = filterData.data
      .filter((filterSection) => filterSection.value === true)
      .map((filterSection) => filterSection.name);

    return filteredNames;
  };

  const productArrayData = productArray?.filter(v => {
    if (filterData?.data?.filter(c => c.key === v.section && c.value)?.length > 0) {
      return v
    }
  })

  return (
    <Container>
      <AppHeader />

      <div sx={{ display: 'flex', flexDirection: 'column', margin: 0, padding: 0 }}>

        <Container sx={{ flexGrow: 1, minHeight: '70vh', mt: 14, mb: 10 }}>
          <Grid container spacing={5}>

            {isMdScreen ? (
              <>
                <Fab size="small" color="primary" sx={{ position: 'fixed', bottom: '20px', right: '20px' }}
                  // className={classes.filterIconButton}
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

                  <FilterSection filterData={filterData} handleCheckboxChange={handleCheckboxChange}
                    handleCheckboxChangeAll={handleCheckboxChangeAll} selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory} />

                </Popover>
              </>
            ) : (
              <Grid item lg={3} >
                <FilterSection filterData={filterData} handleCheckboxChange={handleCheckboxChange}
                  handleCheckboxChangeAll={handleCheckboxChangeAll} selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory} />
              </Grid>
            )}

            <Grid item lg={9} xs={12}>
              <ProductListingPage productArray={productArrayData}
              // filterSelected={filterNamesByValue()}
              />
            </Grid>
          </Grid>
        </Container>

      </div >
      <FooterSection />
      <br />


    </Container >
  );
}

export default SharedLayout;
