import React from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const ratingContainer = {
    display: 'flex',
    padding: '0',
    margin: '0',
    backgroundColor: 'transparent',
    height: '20px',
};


const styles = {
    ratingImage: {
        width: '15px',
        height: '15px',
        padding: '0',
        margin: '0',
        display: 'inline',
        backgroundColor: 'transparent',
        alignSelf: 'flex-start',
    },
    halfRatingImage: {
        width: '7.5px',
        height: '15px',
        padding: '0',
        margin: '0',
        display: 'inline',
        backgroundColor: 'transparent',
        alignSelf: 'flex-start',
    },
 
};

export default function RatingComponent({ RatingInNo }) {
    // Calculate the number of full stars and half stars
    const fullStars = Math.floor(RatingInNo);
    const hasHalfStar = RatingInNo % 1 !== 0;

    // Create JSX for full stars
    let starsJSX = [];
    for (let i = 0; i < fullStars; i++) {
        starsJSX.push(
            <img
                src="assets/full star.png"
                alt="Full Star"
                style={styles.ratingImage}
                key={i}
            />
        );
    }

    // Add half star if applicable
    if (hasHalfStar) {
        starsJSX.push(
            <img
                src="assets/half star.png"
                alt="Half Star"
                style={styles.halfRatingImage}
                key="half-star"
            />
        );
    }

    return (

        <Box style={ratingContainer}>
            <Typography variant="body2" >
                {starsJSX}
            </Typography>
            <Typography variant="body2" sx={{
                lineHeight: 'unset', marginLeft: 1, fontFamily: 'Montserrat',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: '11px',
                lineHeight: '15px',
                color: '#b3c1c8',
            }}>
                (1.2K)
            </Typography>
        </Box>

    );
};
