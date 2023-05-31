import React from "react";
import { footerStyle } from "./style";
import {
    Typography,
    Grid,
    Box,
    Stack
} from "@mui/material";

export default function FooterSection() {
    const classes = footerStyle();
    return (
        <Box sx={{width: '80%', justifyContent:"center", margin: 'auto'}}>
        <hr/>
        <Grid container spacing={2} justifyContent="space-between" style={{paddingTop: '10px'}}>
            <Grid item xs={6} className={classes.logoImageSection}>

                <Typography variant="p"  >
                    © 2007-2023 Google Inc
                </Typography>  

            </Grid>
            <Grid item xs={6} className={classes.logoImageSection} >
            <Stack direction="row" spacing={5} justifyContent="end">
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