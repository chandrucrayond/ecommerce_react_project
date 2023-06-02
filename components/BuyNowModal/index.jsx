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


export default function BuyNowModal({ open, handleClose, productData }) {
    const classes = buyNowStyle();


    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <div className={classes.modalContent}>
                        <Typography
                            variant="h6"
                            component="h2"
                            className={classes.modalTitle}
                            id="modal-title"
                        >
                            Buy Pixel 5
                        </Typography>
                        <IconButton
                            className={classes.closeButton}
                            onClick={handleClose}
                            aria-label="Close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <div className={classes.modalBody}>
                            {/* Rest of the content */}
                        </div>
                    </div>

                </Box>
            </Modal>
        </>
    );
}