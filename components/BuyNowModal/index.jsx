import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Container from '@mui/material/Container';
import { Grid, Stack, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import { buyNowStyle } from "./style";

const buyNowModal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: '#ffffff !important',
    p: 2,
};

const productOverview = {
 border : '1px solid #E9ECEF',
 borderRadius: '4px',
 padding: '10px',
};
export default function BuyNowModal({ open, handleClose, productData }) {
    const classes = buyNowStyle();

    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}

            >
                <Box component="span" sx={buyNowModal} className={classes.modalContent}>

                    <Typography
                        variant="h6"
                        component="h2"
                        className={classes.modalTitle}
                        id="modal-title"
                    >
                        Buy Pixel 5
                    </Typography>
                    <img
                        src="assets/Group 3739.png"
                        alt='close button'
                        className={classes.closeButton}
                        onClick={handleClose}
                        style={{ cursor: 'pointer', }}
                    />
                    <Box className={classes.modalBody}>
                        <Grid container alignItems="center" >
                            <Grid item xs={8} sx={{display: 'flex', flexDirection: 'row',}} style={productOverview}>
                                <Grid item xs={4}>
                                    <Grid container alignItems="center">
                                        <Grid item xs={4} sx={{ paddingRight: 0, justifyContent: 'center', display: 'flex', }}>
                                            <img
                                                src={productData.image}
                                                alt="pixel 5 image"
                                                style={{ width: 31, height: 38, }}
                                            />
                                        </Grid>
                                        <Grid item xs={6} sx={{ paddingLeft: 0, }}>
                                            <Typography variant="h6" >
                                                {productData.name}
                                            </Typography>
                                            <Typography variant="body2">
                                                {productData.serialNo}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={2} sx={{ paddingLeft: 0 }}>
                                            <p>.</p>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid item xs={3} sx={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', }}>
                                  
                                            <Typography variant="body2">
                                                Black | 128GB
                                            </Typography>
                                        
                                </Grid>
                                <Grid item xs={2} sx={{ justifyContent: 'center', display: 'flex', alignItems: 'center', }}>
                                        <Typography variant="body2">
                                                1 Qty
                                            </Typography>
                                       
                                </Grid>
                                <Grid item xs={3} sx={{ justifyContent: 'center', display: 'flex', alignItems: 'center', }}>
                                            <Typography variant="body2">
                                               {productData.price}
                                            </Typography>
                                </Grid>
                            </Grid>
                            <Grid item xs={4}>
                                <p>Summary section</p>
                            </Grid>
                        </Grid>
                    </Box>


                </Box>
            </Modal>
        </>
    );
}