import { makeStyles } from "@mui/styles";

export const filterSectionStyle = makeStyles((theme) => ({
    filterSectionContainer: {
        position: 'fixed',
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '13px',
        lineHeight: '18px',
        color: '#9AACB5',
    },
    filterCheckbox: {
        marginLeft: '0',
        marginBottom: '0',
        marginTop: '0',
        opacity: '0.5',
    },
    responsiveFilter: {
        position: 'fixed !important',
        right: '20px !important',
        bottom: '90px !important',
        transition: 'all 0.5s ease !important',
        boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.5) !important',
        padding: '20px !important',
        backgroundColor: '#fff !important',
        borderRadius: '6% !important',
        fontSize: '13px !important',
        // lineHeight: '18px !important',
        fontFamily: '"Montserrat", sans-serif !important',
        fontWeight: '700 !important',
        color: '#131718 !important',
        textAlign: 'left  !important',
        textTransform: 'none !important',
    },
    responsiveFilterContents: {
        display: 'flex !important',
        alignItems: 'center',
        justifyContent: 'start',
        paddingTop: '0px !important',
        paddingBottom: '0px !important',
        marginTop: '0px !important',
        marginBottom: '0px !important',
       
    },
    responsiveFilterChecked: {
        cursor: 'pointer !important',
        fontWeight: '800 !important',
        color: '#219ebc !important',
    },
    filterPara: {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '12px',
        lineHeight: '15px',
        letterSpacing: '0px',
        color: '#B3C1C8',
    },
    HeadphonesFilter: {
    position: 'relative !important',
    bottom: '20px !important',
    },
    AccessoriesFilter: {
        position: 'relative !important',
        bottom: '40px !important',
    },
}));