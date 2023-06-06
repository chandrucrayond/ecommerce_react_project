import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Container from '@mui/material/Container';
import { viewProductModalStyle } from "./style";
import { Grid, Stack, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import useMediaQuery from '@mui/material/useMediaQuery';
import RatingComponent from '../RatingComponent/index';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import BuyNowModal from '../BuyNowModal';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import SimpleSlider from '../ReactSlide/index';

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


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height: 500,
  bgcolor: '#ffffff !important',
  p: 1,
  pt: 2,
  overflowX: 'hidden',
  [theme.breakpoints.down('sm')]: {
    width: '95%',
  },
};

const scrollableSectionStyle = {
  height: {
    xs: '200px',
  },
};



export default function ViewProductModal({ open, handleClose, productData }) {
  const classes = viewProductModalStyle();

  var items = [
    {
      id: 'image',
      url: productData.image,
    },
    {
      id: 'otherColor',
      url: productData.otherColor,
    }
  ]

  const [bnopen, setBnopen] = React.useState(false);

  const handleBnOpen = () => {
    setBnopen(true);
  };

  const handleBnClose = () => {
    setBnopen(false);
    setIsHovered(false);
  };


  return (
    <div>
  <BuyNowModal open={bnopen} handleClose={handleBnClose} productData={productData} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className={classes.modal}
      >
        <Grid container sx={style} className={classes.outlineViewProductModal}>
          <Grid container className={classes.unScrollableSections}>
            <Grid container spacing={2} >
              <Grid item xs={6}>
                <p className={`${classes.paraInModal} ${classes.paraHeading} `}>
                  {productData.name}
                </p>
              </Grid>
              <Grid item xs={6} className={classes.closeButtonSection}>
                <img
                  src="assets/Group 3739.png"
                  alt='close button'
                  className={classes.closeButton}
                  onClick={handleClose}
                  style={{ cursor: 'pointer', }}
                />
              </Grid>


              <Grid item xs={12} style={{ marginTop: '10px', }}>

                <SimpleSlider productData={productData} />
              </Grid>
            </Grid>
          </Grid>


          <Grid container className={classes.scrollableSections} sx={scrollableSectionStyle}>
            <Grid container spacing={10} className={classes.color} >

              <Grid item xs={3}>
                <p className={classes.paraHeadingInModal}>
                  Color
                </p>
              </Grid>

              <Grid item xs={9} flexDirection="row">
                {productData.color.map((color, index) => {
                  const colorInHex = productData.colorInHex[index];
                  return (

                    <Grid container xs={4}>
                      <Grid item className={classes.colorFlex}>
                        <FiberManualRecordIcon sx={{ color: colorInHex }} />
                        <p className={classes.paraInModal}>
                          {color}
                        </p>
                      </Grid>
                    </Grid>

                  );
                })}
              </Grid>
            </Grid>


            <Grid container spacing={10} className={classes.display}>
              <Grid item xs={3} >
                <p className={classes.paraHeadingInModal}>
                  Display
                </p>
              </Grid>

              <Grid item xs={9}>
                <Grid container direction="column" spacing={2}>
                  {productData.display.map((display, index) => (
                    <Grid item>
                      <p className={classes.paraInModal}>
                        {display}
                      </p>
                    </Grid>

                  ))}
                </Grid>
              </Grid>
            </Grid>



            <Grid container spacing={10} className={classes.dimension}>
              <Grid item xs={3}>

                <p className={classes.paraHeadingInModal}>
                  Dimension & Weight
                </p>

              </Grid>
              <Grid item xs={9}>
                <Grid container direction="column" spacing={2}>
                  {productData.dimension.map((dimension) => (

                    <Grid item>
                      <p className={classes.paraInModal}>
                        {dimension}
                      </p>
                    </Grid>

                  ))}

                </Grid>
              </Grid>
            </Grid>




            <Grid container spacing={10} className={classes.battery}>
              <Grid item xs={3}>

                <p className={classes.paraHeadingInModal}>
                  Battery & Charging
                </p>

              </Grid>
              <Grid item xs={9}>
                <Grid container direction="column" spacing={2}>
                  {productData.battery.map((battery) => (

                    <Grid item>
                      <p className={classes.paraInModal}>
                        {battery}
                      </p>
                    </Grid>

                  ))}

                </Grid>
              </Grid>
            </Grid>




            <Grid container spacing={10} className={classes.memory}>
              <Grid item xs={3}>

                <p className={classes.paraHeadingInModal}>
                  Memory
                </p>

              </Grid>
              <Grid item xs={9}>

                <p className={classes.paraInModal}>
                  {productData.memory}
                </p>

              </Grid>
            </Grid>



            <Grid container spacing={10} className={classes.storage}>
              <Grid item xs={3}>

                <p className={classes.paraHeadingInModal}>
                  Storage
                </p>

              </Grid>
              <Grid item xs={9}>

                <p className={classes.paraInModal}>
                  {productData.storage}
                </p>

              </Grid>
            </Grid>



          </Grid>



          <Grid container className={classes.unScrollableSections2}>
            <Grid container spacing={2}>
              <Grid item xs={6} className={`${classes.priceAndRating}`}>
                <Grid item>
                  <Typography className={`${classes.priceInNumber}`}>
                    $ {productData.priceInNumber}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography className={`${classes.ratingInNo}`} style={{ justifyContent: 'unset', }}>
                    <RatingComponent RatingInNo={productData.ratingInNo} />
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={6} className={`${classes.buyNowButtonSection}`}>
                  <Button onClick={handleBnOpen} className={`${classes.buyNowButton}`}>Buy Now</Button>
              </Grid>
            </Grid>
          </Grid>



        </Grid>
      </Modal>

    </div >
  );
}