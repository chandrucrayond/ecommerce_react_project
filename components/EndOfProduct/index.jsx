import React, { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { endOfProductStyle } from './style';


export default function EndOfProduct() {

    const classes = endOfProductStyle();

    return (
        <Box>
            <img src="assets/icons8-multiple-stars1.png" alt="star image 1" />
            <Typography className={`${classes.endPara}`}>
                Product end here
            </Typography>
            <img src="assets/icons8-multiple-stars2.png" alt="star image 2" />
        </Box >
    );
}