import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Container from '@mui/material/Container';
import { viewProductModalStyle } from "./style";
import { Grid, Stack } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';


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

  return (
    <div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className={classes.modal}
      >
        <Container   sx={style} className={classes.outlineViewProductModal}>
          <Container className={classes.unScrollableSections}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <p className={classes.paraInModal}>
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
            </Grid>

            <Carousel className={classes.carousel}
              IndicatorIcon="" // Previous Example
              navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
                style: {
                  opacity:"0.1",
                },
                '&:hover': {
                  opacity: "0.2",
                },
              }} 
              
              >
            {items.map((item) => (
              <div className={classes.carouselSection}>
                <img src={'../' + item.url} alt={item.url} key={item.id} className={classes.carouselImage} />
              </div >
            ))}

          </Carousel>
        </Container>


        <Container className={classes.scrollableSections} sx={scrollableSectionStyle}>
          <Grid container spacing={10} className={classes.color}>

            <Grid item xs={3} >
              <p className={classes.paraHeadingInModal}>
                Color
              </p>
            </Grid>

            {productData.color.map((color, index) => (
              <Grid item xs={2} key={index}>
                <p className={classes.paraInModal}>
                  {color}
                </p>
              </Grid>
            ))}
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



        </Container>



        <Container className={classes.unScrollableSections2}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Grid item>
                <p className={`${classes.priceInNumber}`}>
                  {productData.priceInNumber}
                </p>
              </Grid>
              <Grid item>
                <p className={`${classes.ratingInNo}`}>
                  {productData.ratingInNo}
                </p>
              </Grid>
            </Grid>
            <Grid item xs={6} className={`${classes.buyNowButtonSection}`}>
              <Button onClick={handleClose}  className={`${classes.buyNowButton}`}>Buy Now</Button>
            </Grid>
          </Grid>
        </Container>



      </Container>
    </Modal>

    </div >
  );
}