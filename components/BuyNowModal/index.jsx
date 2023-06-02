import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Container from '@mui/material/Container';
import { Grid, Stack, Typography, MenuItem, TextField, Select, InputLabel, FormControl } from '@mui/material';
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
    border: '1px solid #E9ECEF',
    borderRadius: '4px',
    padding: '10px',
};


const inputBuyNow = {
    marginTop: '5px',
    height: '40px',
};

const inputTextfield = {
    marginTop: '5px',
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
                    <Box component="span" className={classes.modalBody} >
                        <Grid container sx={{ marginTop: '20px', }}>
                            <Grid item xs={8} sx={{ display: 'flex', flexDirection: 'column', }} >
                                <Box sx={productOverview} style={{ display: 'flex', flexDirection: 'row', }}>
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

                                    <Grid item xs={3} sx={{ justifyContent: 'center', display: 'flex', alignItems: 'center', }}>

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
                                </Box>




                                {showEditAddress ? (

                                    <Box sx={productOverview} style={{ display: 'flex', flexDirection: 'row', marginTop: '20px', padding: '20px', marginBottom: '100px', }}>
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

                                                <Typography variant="body" onClick={handleEditAddressClick}>
                                                    EDIT
                                                </Typography>

                                            </Grid>
                                        </Grid>
                                    </Box>

                                ) : (
                                    <Box sx={productOverview} style={{ display: 'flex', flexDirection: 'row', marginTop: '20px', padding: '20px', }}>
                                        <Grid container>
                                            <Grid container>
                                                <Grid item xs={6}>
                                                    <Typography variant="body" >
                                                        ADD ADDRESS
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'end', cursor: 'pointer', color: '#219EBC' }}>

                                                    <Typography variant="body" onClick={handleSaveAddressClick}>
                                                        SAVE ADDRESS
                                                    </Typography>


                                                </Grid>
                                            </Grid>
                                            <Grid container sx={{ marginTop: '20px', }}>

                                                <Grid item xs={6}  >
                                                    <Typography variant="body2">
                                                        Name
                                                    </Typography>
                                                    <TextField
                                                        type="text"
                                                        variant="outlined"
                                                        placeholder="Amy Jackson"
                                                        sx={inputTextfield}
                                                        size="small"
                                                        value={name}
                                                        onChange={handleNameChange}
                                                    />
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Typography variant="body2">
                                                        Contact Number
                                                    </Typography>
                                                    <TextField
                                                        type="text"
                                                        variant="outlined"
                                                        placeholder="9999 999 999"
                                                        inputProps={{
                                                            pattern: "[0-9]{10}",
                                                        }}
                                                        sx={inputTextfield}
                                                        fullWidth
                                                        size="small"
                                                        value={mobile}
                                                        onChange={handleMobileChange}
                                                    />

                                                </Grid>
                                            </Grid>
                                            <Grid container sx={{ marginTop: '20px', }}>
                                                <Grid item xs={12}>
                                                    <Typography variant="body2" className="modal--label__address">
                                                        Address
                                                    </Typography>
                                                    <TextField
                                                        type="text"
                                                        variant="outlined"
                                                        placeholder="Dubai main road, Dubai cross street"
                                                        sx={inputTextfield}
                                                        size="small"
                                                        fullWidth
                                                        value={address}
                                                        onChange={handleAddressChange}
                                                    />
                                                </Grid>
                                            </Grid>
                                            <Grid container sx={{ marginTop: '20px', }}>
                                                <Grid item xs={6} >
                                                    <Typography variant="body2">
                                                        City
                                                    </Typography>
                                                    <FormControl fullWidth sx={{ width: '90%' }}>

                                                        <Select
                                                            id="selectedCity"
                                                            value={city}
                                                            onChange={handleCityChange}
                                                            sx={inputBuyNow}
                                                        >
                                                            <MenuItem value={'Select City'}>
                                                                Select City
                                                            </MenuItem>
                                                            <MenuItem value={'Chennai'}>
                                                                Chennai
                                                            </MenuItem>
                                                            <MenuItem value={'Madurai'}>
                                                                Madurai
                                                            </MenuItem>
                                                            <MenuItem value={'Kancheepuram'}>
                                                                Kancheepuram
                                                            </MenuItem>

                                                        </Select>
                                                    </FormControl>
                                                </Grid>

                                                <Grid item xs={6} >
                                                    <Typography variant="body2">
                                                        Country
                                                    </Typography>
                                                    <FormControl fullWidth>
                                                        <Select
                                                            id="selectedCountry"
                                                            labelId="my-select-label"
                                                            value={country}
                                                            onChange={handleCountryChange}
                                                            sx={inputBuyNow}
                                                            variant="outlined"

                                                        >

                                                            <MenuItem value={'Select Country'}>
                                                                Select Country
                                                            </MenuItem>
                                                            <MenuItem value={'Kailasha'}>
                                                                Kailasha
                                                            </MenuItem>
                                                            <MenuItem value={'India'}>
                                                                India
                                                            </MenuItem>
                                                            <MenuItem value={'China'}>
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
                            <Grid item xs={4}>
                                <Box sx={productOverview} style={{ display: 'flex', flexDirection: 'row', marginLeft: '10px', padding: '10px', }}>
                                    <Grid container>

                                        <Grid container sx={{marginTop:'20px'}}>
                                            <Grid item xs={12}>
                                                <Typography variant="body2" className="modal--label__address">
                                                    INVOICE SUMMARY
                                                </Typography>
                                            </Grid>
                                        </Grid>


                                        <Grid container sx={{marginTop:'16px'}}>
                                            <Grid item xs={6}>
                                                <Typography variant="body2" className="modal--label__address">
                                                   Actual amuont
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'end',}}>
                                                <Typography variant="body2" className="modal--label__address">
                                                   $ 499
                                                </Typography>
                                            </Grid>
                                        </Grid>


                                        <Grid container sx={{marginTop:'16px'}}>
                                            <Grid item xs={6}>
                                                <Typography variant="body2" className="modal--label__address">
                                                   Discount
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'end',}}>
                                                <Typography variant="body2" className="modal--label__address">
                                                   $ 50
                                                </Typography>
                                            </Grid>
                                        </Grid>


                                        <Grid container sx={{marginTop:'16px'}}>
                                            <Grid item xs={6}>
                                                <Typography variant="body2" className="modal--label__address">
                                                  Billing amount
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'end',}}>
                                                <Typography variant="body2" className="modal--label__address">
                                                   $ 699
                                                </Typography>
                                            </Grid>
                                        </Grid>


                                        <Grid container sx={{marginTop:'16px'}}>
                                            <Grid item xs={6}>
                                                <Typography variant="body2" className="modal--label__address">
                                                  Total amount
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'end',}}>
                                                <Typography variant="body2" className="modal--label__address">
                                                   $ 699
                                                </Typography>
                                            </Grid>
                                        </Grid>


                                        <Grid container sx={{marginTop:'16px'}}>
                                            <Grid item xs={12}>
                                                <Button fullWidth>
                                                  Buy now
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
        </>
    );
}