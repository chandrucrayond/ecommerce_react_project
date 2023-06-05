import React from "react";
import { footerStyle } from "./style";
import {
    Typography,
    Grid,
    Box,
    Stack
} from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useMediaQuery} from '@mui/material';

export default function FooterSection() {
    const classes = footerStyle();
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
    const isXsScreen = useMediaQuery(() => theme.breakpoints.down('sm'));
    return (
        <Box sx={{width: '80%', justifyContent:"center", margin: 'auto'}} className={classes.footerBox} >
        <hr className={classes.footerLine}/>
        <Grid container spacing={2} justifyContent="space-between" style={{paddingTop: '10px',  textAlign: isXsScreen ? 'center' : '',}}>
            <Grid item xs={12} sm={6} className={classes.logoImageSection}>

                <Typography variant="p"  >
                    © 2007-2023 Google Inc.
                </Typography>  

            </Grid>
            <Grid item xs={12} sm={6} className={classes.logoImageSection} >
            <Stack direction="row" spacing={5} sx={{justifyContent: isXsScreen ? 'space-around' : 'end'}}>
                <Typography variant="p"  >
                    Terms & Conditions
                </Typography>
                <Typography variant="p"  >
                    Privacy
                </Typography>
                <Typography variant="p"  >
                    Career
                </Typography>
            </Stack>
            </Grid>
        </Grid>
        </Box>
    )
}