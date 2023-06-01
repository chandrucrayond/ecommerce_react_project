import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Container from '@mui/material/Container';
import { viewProductModalStyle } from "./style";
import { Grid, Stack } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: '#ffffff',
  p: 4,
};

export default function ViewProductModal({ open, handleClose, productData }) {
  const classes = viewProductModalStyle();


  return (
    <div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className={classes.modal}
        style={{
          paddingBottom: 0}}
      >
        <Container sx={style} className={classes.outlineViewProductModal}>
          <Container className={classes.unScrollableSections}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <p className={classes.vpmodalTitle}>
                  {productData.name}
                </p>
              </Grid>
              <Grid item xs={6} className={classes.closeButtonSection}>
                <Button onClick={handleClose}>Close</Button>
              </Grid>
            </Grid>
            <img
              src={productData.image}
              alt={productData.name}
              className={classes.carouselImage}
            />
          </Container>


          <Container className={classes.scrollableSections}>
            <Grid container spacing={10} className={classes.color}>

              <Grid item xs={3} >
                <p>
                  Color
                </p>
              </Grid>

              {productData.color.map((color, index) => (
                <Grid item xs={2} key={index}>
                  <p>
                    {color}
                  </p>
                </Grid>
              ))}
            </Grid>


            <Grid container spacing={10} className={classes.display}>
              <Grid item xs={3} >
                <p>
                  Display
                </p>
              </Grid>

              <Grid item xs={9}>
                <Grid container direction="column" spacing={2}>
                  {productData.display.map((display, index) => (
                    <Grid item>
                      <p textAlign="end">
                        {display}
                      </p>
                    </Grid>

                  ))}
                </Grid>
              </Grid>
            </Grid>



            <Grid container spacing={10} className={classes.dimension}>
              <Grid item xs={3}>

                <p>
                  Dimension & Weight
                </p>

              </Grid>
              <Grid item xs={9}>
                <Grid container direction="column" spacing={2}>
                  {productData.dimension.map((dimension) => (

                    <Grid item>
                      <p>
                        {dimension}
                      </p>
                    </Grid>

                  ))}

                </Grid>
              </Grid>
            </Grid>




            <Grid container spacing={10} className={classes.battery}>
              <Grid item xs={3}>

                <p>
                  Battery & Charging
                </p>

              </Grid>
              <Grid item xs={9}>
                <Grid container direction="column" spacing={2}>
                  {productData.battery.map((battery) => (

                    <Grid item>
                      <p>
                        {battery}
                      </p>
                    </Grid>

                  ))}

                </Grid>
              </Grid>
            </Grid>




            <Grid container spacing={10} className={classes.memory}>
              <Grid item xs={3}>

                <p>
                  Memory
                </p>

              </Grid>
              <Grid item xs={9}>

                <p>
                  {productData.memory}
                </p>

              </Grid>
            </Grid>



            <Grid container spacing={10} className={classes.storage}>
              <Grid item xs={3}>

                <p>
                  Storage
                </p>

              </Grid>
              <Grid item xs={9}>

                <p>
                  {productData.storage}
                </p>

              </Grid>
            </Grid>



          </Container>



          <Container className={classes.unScrollableSections2}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
              <Grid item>
                <p className={classes.priceInNumber}>
                  {productData.priceInNumber}
                </p>
              </Grid>
              <Grid item>
                <p className={classes.ratingInNo}>
                  {productData.ratingInNo}
                </p>
              </Grid>
              </Grid>
              <Grid item xs={6} className={classes.buyNowButton}>
                <Button onClick={handleClose}>Buy Now</Button>
              </Grid>
            </Grid>
          </Container>



        </Container>
      </Modal>

    </div>
  );
}