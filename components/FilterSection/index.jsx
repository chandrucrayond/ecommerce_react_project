import React, { useState, useRef, useEffect } from 'react';
import { filterSectionStyle } from './style';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useMediaQuery, Box, Checkbox } from '@mui/material';
import { pink } from '@mui/material/colors';
import FilterCheckbox from '../FilterCheckbox';

export default function FilterSection(props) {
    const { filterData, handleCheckboxChange, handleCheckboxChangeAll, selectedCategory, setSelectedCategory } = props;
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
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const isAllChecked = filterData.data.every(item => item.value);

    return (
        <ThemeProvider theme={theme}>
            <Box className={`${classes.filterSectionContainer}`}>
                <p
                    style={{
                        display: isMdScreen ? 'none' : 'block',
                        position: 'relative',
                        left: '12px',
                    }}
                    className={`${classes.filterPara}`}
                >
                    Filters
                </p>
              
                    <Box className={`${isMdScreen ? classes.responsiveFilter : ''} `}>
                        <Box className={`${classes.responsiveFilterContents} ${classes.phoneFilter}`}>
                            <Checkbox
                                className={`${classes.filterCheckbox}`}
                                checked={isAllChecked}
                                onChange={handleCheckboxChangeAll}
                                size="small"
                                sx={{
                                    '&.Mui-checked': {
                                        color: pink[500],
                                    },
                                }}
                            />
                            <label
                                className={isAllChecked ? classes.responsiveFilterChecked : ''}
                                onClick={handleCheckboxChangeAll}
                                style={{ cursor: 'pointer' }}
                            >
                                All
                            </label>
                        </Box>
                        {filterData.data.map((values, index) => (
                            <FilterCheckbox
                                onChange={(e) => handleCheckboxChange(!values.value, index)}
                                label={values.name}
                                checked={values.value}
                                key={index}
                            />
                        ))}
                    </Box>
              
            </Box>
        </ThemeProvider>

    );
}