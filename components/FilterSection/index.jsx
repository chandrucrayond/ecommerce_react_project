import React, { useState } from 'react';
import { filterSectionStyle } from './style';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useMediaQuery, Box, Checkbox } from '@mui/material';
import { pink } from '@mui/material/colors';

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
    const [isPhonesChecked, setIsPhonesChecked] = useState(true);
    const [isHeadphonesChecked, setIsHeadphonesChecked] = useState(false);
    const [isAccessoriesChecked, setIsAccessoriesChecked] = useState(false);

    const handlePhonesCheckboxChange = (event) => {
        setIsPhonesChecked(event.target.checked);
    };

    const handleHeadphonesCheckboxChange = (event) => {
        setIsHeadphonesChecked(event.target.checked);
    };

    const handleAccessoriesCheckboxChange = (event) => {
        setIsAccessoriesChecked(event.target.checked);
    };

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
        <Box
            className={`${classes.filterSectionContainer}`}>

            <p style={{
                display: isMdScreen ? 'none' : 'block',
                position: 'relative',
                left: '12px',
            }} className={`${classes.filterPara}`}>Filters</p>
            <form action="/action_page.php">
                <Box className={`${isMdScreen ? classes.responsiveFilter : ''}`}>
                    <Box className={`${classes.responsiveFilterContents} ${classes.phoneFilter}`}>

                        <Checkbox
                            {...label}
                            className={`${classes.filterCheckbox}`}
                            checked={isPhonesChecked}
                            onChange={handlePhonesCheckboxChange}
                            size="small"
                            sx={{
                                '&.Mui-checked': {
                                    color: '#219ebc',
                                },
                            }}
                        />
                        <label className={isPhonesChecked ? classes.responsiveFilterChecked : ''}
                            onClick={() => {
                                setIsPhonesChecked(!isPhonesChecked);
                                handleHeadphonesCheckboxChange();
                            }}
                            style={{ cursor: 'pointer', }}
                        >Phones</label>
                    </Box>
                    {isMdScreen ? (' ') : (<br />)}
                    <Box className={`${classes.responsiveFilterContents} ${classes.HeadphonesFilter}`}>
                        <Checkbox
                            {...label}
                            className={`${classes.filterCheckbox}`}
                            checked={isHeadphonesChecked}
                            onChange={handleHeadphonesCheckboxChange}
                            size="small"
                            sx={{
                                // color: pink[800],
                                '&.Mui-checked': {
                                    color: '#219ebc',
                                },
                            }}
                        />
                        <label className={isHeadphonesChecked ? classes.responsiveFilterChecked : ''}
                            onClick={() => {
                                setIsHeadphonesChecked(!isHeadphonesChecked);
                                handleHeadphonesCheckboxChange();
                            }}
                            style={{ cursor: 'pointer', }}
                        >Headphones</label>
                    </Box>
                    {/* <br /> */}
                    {isMdScreen ? (' ') : (<br />)}
                    <Box className={`${classes.responsiveFilterContents} ${classes.AccessoriesFilter}`}>
                        <Checkbox
                            {...label}
                            className={`${classes.filterCheckbox}`}
                            checked={isAccessoriesChecked}
                            onChange={handleAccessoriesCheckboxChange}
                            size="small"
                            sx={{
                                // color: pink[800],
                                '&.Mui-checked': {
                                    color: '#219ebc',
                                },
                            }}
                        />
                        <label className={isAccessoriesChecked ? classes.responsiveFilterChecked : ''}
                            onClick={() => {
                                setIsAccessoriesChecked(!isAccessoriesChecked);
                                handleAccessoriesCheckboxChange();
                            }}
                            style={{ cursor: 'pointer', }}
                        >
                            Accessories
                        </label>
                    </Box>
                </Box>
            </form>

        </Box>

    );
}