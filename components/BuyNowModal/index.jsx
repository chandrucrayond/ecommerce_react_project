import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Container from '@mui/material/Container';
import { Grid, Stack, Typography, MenuItem, TextField, Select, InputLabel, FormControl, } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { useMediaQuery } from '@mui/material';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import { buyNowStyle } from "./style";

const buyNowModal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: '#ffffff !important',
    p: 2,
    height: 'auto',
    maxHeight: '95%',
    // width: '90%',

    // marginLeft: '20px',
    // marginRight: '20px',
};

const productOverview = {
    border: '1px solid #E9ECEF',
    borderRadius: '4px',
    padding: '10px',
};


const inputBuyNow = {
    marginTop: '5px',
    height: '40px',
};

const inputTextfield = {

    marginTop: '10px !important',
    background: '#ffffff !important',
    backgroundPosition: '0% 0% !important',
    backgroundRepeat: 'no-repeat !important',
    backgroundSize: 'padding-box !important',
    border: '1px solid #e9ecef !important',
    borderRadius: '4px !important',
    fontStyle: 'normal !important',
    fontWeight: '600 !important',
    fontSize: '12px !important',
    lineHeight: '15px !important',
    fontFamily: 'Montserrat !important',
    letterSpacing: '0px !important',
    color: '#023047 !important',
};

const payAmountButton = {
    backgroundColor: '#219EBC',
};
export default function BuyNowModal({ open, handleClose, productData }) {
    const classes = buyNowStyle();

    const [name, setName] = React.useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const [mobile, setMobile] = React.useState('');

    const handleMobileChange = (event) => {
        setMobile(event.target.value);
    };

    const [address, setAddress] = React.useState('');

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };


    const [city, setCity] = React.useState('');

    const handleCityChange = (event) => {
        setCity(event.target.value);
    };

    const [country, setCountry] = React.useState('');

    const handleCountryChange = (event) => {
        setCountry(event.target.value);
    };

    const [showEditAddress, setShowEditAddress] = React.useState(false);

    const handleSaveAddressClick = () => {
        setShowEditAddress(true);
    };

    const handleEditAddressClick = () => {
        setShowEditAddress(false);
    };

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
    const isLgScreen = useMediaQuery(() => theme.breakpoints.up('md'));

    const menuProps = {
        classes: {
            list: classes.list
        },
        anchorOrigin: {
            vertical: "bottom",
            horizontal: "left"
        },
        transformOrigin: {
            vertical: "top",
            horizontal: "left"
        },
        getContentAnchorEl: null
    };

    return (
        <ThemeProvider theme={theme}>
            <Modal
                open={open}
                onClose={handleClose}
                scroll="paper"
            >
                <Box component="span" sx={buyNowModal} className={classes.modalContent}>

                    <Typography
                        variant="h6"
                        component="h2"
                        className={classes.modalTitle}
                        id="modal-title"
                    >
                        Buy {productData.name}
                    </Typography>
                    <img
                        src="assets/Group 3739.png"
                        alt='close button'
                        className={classes.closeButton}
                        onClick={handleClose}
                        style={{ cursor: 'pointer', }}
                    />
                    <Box component="span" className={classes.modalBody} >
                        <Grid container sx={{ marginTop: '20px', }}>
                            <Grid item xs={12} lg={8} sx={{ display: 'flex', flexDirection: 'column', }} >
                                <Box sx={productOverview} style={{ display: 'flex', flexDirection: 'row', paddingTop: '20px', paddingBottom: '20px', }}>
                                    <Grid item xs={12} lg={4}>
                                        <Grid container alignItems="center" sx={{ display: 'flex', justifyContent: 'center', }}>
                                            <Grid item xs={5} sx={{ paddingRight: 0, display: 'flex', justifyContent: 'center', }}>
                                                <img
                                                    src={productData.image}
                                                    alt="pixel 5 image"
                                                    style={{
                                                        width: isLgScreen ? 70 : 105,
                                                        height: isLgScreen ? 55 : 55,
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item xs={12} lg={5} sx={{ paddingLeft: 0, display: 'grid', justifyContent: 'center', }}>
                                                <Typography variant="h6" className={classes.productHeading} sx={{  display: 'flex', justifyContent: 'center',  }}>
                                                    {productData.name}
                                                </Typography>
                                                <Typography variant="body2" className={classes.productSerialNo} sx={{  display: 'flex', justifyContent: 'center', }}>
                                                    {productData.serialNo}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid item xs={12} lg={3} sx={{ justifyContent: 'center', display: 'flex', alignItems: 'center', position:'relative', left:'10px'}} >

                                        <Typography variant="body2" className={classes.productSpeciality}>
                                            Black | 128GB
                                        </Typography>

                                    </Grid>
                                    <Grid item xs={12} lg={2} sx={{ justifyContent: 'center', display: 'flex', alignItems: 'center', }} >
                                        <Typography variant="body2" className={classes.productSpeciality}>
                                            1 Qty
                                        </Typography>

                                    </Grid>
                                    <Grid item xs={12} lg={3} sx={{ justifyContent: 'center', display: 'flex', alignItems: 'center', }}>
                                        <Typography variant="body2" className={classes.productPriceInHeadingSection}>
                                            {productData.price}
                                        </Typography>
                                    </Grid>
                                </Box>




                                {showEditAddress ? (

                                    <Box sx={productOverview} style={{ display: 'flex', flexDirection: 'row', marginTop: '20px', padding: '20px', marginBottom: isLgScreen ? '100px' : '10px', }}>
                                        <Grid container>
                                            <Grid item xs={5}>
                                                <Grid container>
                                                    <Grid item>
                                                        <Typography variant="body" >
                                                            {name}
                                                        </Typography>
                                                        <Grid item style={{ marginTop: '20px' }}>
                                                            <Typography variant="body" >
                                                                {mobile}
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={5} sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center', }}>
                                                <Typography variant="body" >
                                                    {address}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'end', cursor: 'pointer', color: '#219EBC', alignItems: 'center', }}>

                                                <Typography variant="body" className={classes.editButton} onClick={handleEditAddressClick}>
                                                    EDIT
                                                </Typography>

                                            </Grid>
                                        </Grid>
                                    </Box>

                                ) : (
                                    <Box sx={productOverview} style={{ display: 'flex', flexDirection: 'row', marginTop: '20px', padding: '20px', }} className={classes.formInputsSection}>
                                        <Grid container>
                                            <Grid container>
                                                <Grid item xs={6}>
                                                    <Typography variant="body" className={classes.addAddress}>
                                                        ADD ADDRESS
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'end', cursor: 'pointer', color: '#219EBC' }}>

                                                    <Typography variant="body" onClick={handleSaveAddressClick} className={classes.saveAddress}>
                                                        SAVE ADDRESS
                                                    </Typography>


                                                </Grid>
                                            </Grid>
                                            <Grid container sx={{ marginTop: '20px', }}>

                                                <Grid item xs={6} >
                                                    <Typography variant="body2" className={classes.formHeading}>
                                                        Name
                                                    </Typography>
                                                    <TextField
                                                        type="text"
                                                        variant="outlined"
                                                        placeholder="Amy Jackson"
                                                        size="small"
                                                        value={name}
                                                        onChange={handleNameChange}
                                                        InputProps={{
                                                            className: `${classes.formInputsName}`,
                                                        }}

                                                        fullWidth
                                                    />
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Typography variant="body2" className={classes.formHeading}>
                                                        Contact Number
                                                    </Typography>
                                                    <TextField
                                                        type="text"
                                                        variant="outlined"
                                                        placeholder="9999 999 999"
                                                        InputProps={{
                                                            pattern: "[0-9]{10}",
                                                            className: `${classes.formInputsMobile}`,
                                                        }}
                                                        fullWidth
                                                        size="small"
                                                        value={mobile}
                                                        onChange={handleMobileChange}
                                                    />

                                                </Grid>
                                            </Grid>
                                            <Grid container sx={{ marginTop: '20px', }}>
                                                <Grid item xs={12}>
                                                    <Typography variant="body2" className={classes.formHeading}>
                                                        Address
                                                    </Typography>
                                                    <TextField
                                                        type="text"
                                                        variant="outlined"
                                                        placeholder="Dubai main road, Dubai cross street"
                                                        size="small"
                                                        fullWidth
                                                        value={address}
                                                        onChange={handleAddressChange}
                                                        InputProps={{
                                                            className: `${classes.formInputsMobile}`,

                                                        }}

                                                    />
                                                </Grid>
                                            </Grid>
                                            <Grid container sx={{ marginTop: '20px', }}>
                                                <Grid item xs={6} >
                                                    <Typography variant="body2" className={classes.formHeading}>
                                                        City
                                                    </Typography>
                                                    <FormControl fullWidth sx={{ width: '90%' }}>

                                                        <Select
                                                            id="selectedCity"
                                                            value={city}
                                                            onChange={handleCityChange}
                                                            sx={inputBuyNow}
                                                            MenuProps={menuProps}
                                                            className={`${classes.formSelectCity}`}
                                                        >
                                                            <MenuItem value={'Select City'} className={classes.formSelectCity}>
                                                                Select City
                                                            </MenuItem>
                                                            <MenuItem value={'Chennai'} className={classes.formSelectCity}>
                                                                Chennai
                                                            </MenuItem>
                                                            <MenuItem value={'Madurai'} className={classes.formSelectCity}>
                                                                Madurai
                                                            </MenuItem>
                                                            <MenuItem value={'Kancheepuram'} className={classes.formSelectCity}>
                                                                Kancheepuram
                                                            </MenuItem>

                                                        </Select>
                                                    </FormControl>
                                                </Grid>

                                                <Grid item xs={6} >
                                                    <Typography variant="body2" className={classes.formHeading}>
                                                        Country
                                                    </Typography>
                                                    <FormControl fullWidth >
                                                        <Select
                                                            id="selectedCountry"
                                                            labelId="my-select-label"
                                                            value={country}
                                                            onChange={handleCountryChange}
                                                            sx={inputBuyNow}
                                                            variant="outlined"
                                                            MenuProps={menuProps}
                                                            className={`${classes.formSelectCity}`}
                                                        >
                                                            <MenuItem value={'Select Country'} selected className={classes.formSelectCity}>
                                                                Select Country
                                                            </MenuItem>
                                                            <MenuItem value={'Kailasha'} className={classes.formSelectCity}>
                                                                Kailasha
                                                            </MenuItem>
                                                            <MenuItem value={'India'} className={classes.formSelectCity}>
                                                                India
                                                            </MenuItem>
                                                            <MenuItem value={'China'} className={classes.formSelectCity}>
                                                                China
                                                            </MenuItem>

                                                        </Select>
                                                    </FormControl>

                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                )}

                            </Grid>
                            <Grid item xs={12} lg={4}>
                                <Box
                                    sx={productOverview}
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        padding: '10px',
                                        marginLeft: isLgScreen ? '20px' : '',
                                        marginTop: isLgScreen ? '' : '20px',
                                    }}
                                >
                                    <Grid container>

                                        <Grid container sx={{ marginTop: '20px' }}>
                                            <Grid item xs={12}>
                                                <Typography variant="body2" className={classes.summaryHeading}>
                                                    INVOICE SUMMARY
                                                </Typography>
                                            </Grid>
                                        </Grid>


                                        <Grid container sx={{ marginTop: '16px' }}>
                                            <Grid item xs={6}>
                                                <Typography variant="body2" className={classes.summarySubHeading}>
                                                    Actual amuont
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'end', }}>
                                                <Typography variant="body2" className={classes.summarySubPara}>
                                                    ${Number(productData.priceInNumber) + 60}.00
                                                </Typography>
                                            </Grid>
                                        </Grid>


                                        <Grid container sx={{ marginTop: '16px' }}>
                                            <Grid item xs={6}>
                                                <Typography variant="body2" className={classes.summarySubHeading}>
                                                    Discount
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'end', }}>
                                                <Typography variant="body2" className={classes.summarySubPara}>
                                                    $60.00
                                                </Typography>
                                            </Grid>
                                        </Grid>


                                        <Grid container sx={{ marginTop: '16px' }}>
                                            <Grid item xs={6}>
                                                <Typography variant="body2" className={classes.summarySubHeading}>
                                                    Billing amount
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'end', }}>
                                                <Typography variant="body2" className={classes.summarySubPara}>
                                                    ${productData.priceInNumber}.00
                                                </Typography>
                                            </Grid>
                                        </Grid>


                                        <Grid container sx={{ marginTop: '16px' }}>
                                            <Grid item xs={6}>
                                                <Typography variant="body2" className={classes.summaryTotalHeading}>
                                                    Total amount
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'end', }}>
                                                <Typography variant="body2" className={classes.summaryTotalPara}>
                                                    ${productData.priceInNumber}.00
                                                </Typography>
                                            </Grid>
                                        </Grid>


                                        <Grid container sx={{ marginTop: '16px' }}>
                                            <Grid item xs={12}>
                                                <Button variant="contained" style={payAmountButton} className={classes.summaryPayAmount} fullWidth>
                                                    ${productData.priceInNumber}.00
                                                </Button>
                                            </Grid>
                                        </Grid>


                                    </Grid>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>


                </Box>
            </Modal>
        </ThemeProvider>
    );
}