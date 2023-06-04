import React from 'react';
import { filterSectionStyle } from './style';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useMediaQuery, Box } from '@mui/material';

export default function FilterSection() {
    const classes = filterSectionStyle();
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

    return (
        <Box
            className={`${classes.filterSectionContainer}`}>

            <p id="main--checkbox__filter" style={{ display: isMdScreen ? 'none' : 'block' }}>Filters</p>
            <form action="/action_page.php">
                <Box className={`${isMdScreen ? classes.responsiveFilterContents : ''} `}>

                    <>
                        <input type="checkbox" id="main--checkbox__phone" value="Phones" className={`${classes.filterCheckbox}`} />
                        <label htmlFor="main--checkbox__phone" id="main--checkbox__selected" style={{ cursor: 'pointer' }}>Phones</label>
                    </>
                    <br />
                    <>
                        <input type="checkbox" id="main--checkbox__headphones" value="Headphones" className={`${classes.filterCheckbox}`} />
                        <label htmlFor="main--checkbox__headphones" style={{ cursor: 'pointer' }}>Headphones</label>
                    </>
                    <br />
                    <>
                        <input type="checkbox" id="main--checkbox__accessories" value="Accessories" className={`${classes.filterCheckbox}`} />
                        <label htmlFor="main--checkbox__accessories" style={{ cursor: 'pointer' }}>Accessories</label>
                    </>

                </Box>
            </form>

        </Box>

    );
}