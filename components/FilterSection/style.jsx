import { makeStyles } from "@mui/styles";

export const filterSectionStyle = makeStyles((theme) => ({
    filterSectionContainer: { 
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '13px',
        lineHeight: '18px',
        color: '#9AACB5',
        // left: '130px',
    },
    filterCheckbox: {
        marginLeft: '0',
        marginBottom: '0',
        marginTop: '0',
        opacity: '0.5',
    },
    responsiveFilter: {
       
    //     right: '20px !important',
    //     bottom: '90px !important', 
        boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.5) !important',
        padding: '15px !important',
        paddingLeft: '0px !important',
        backgroundColor: '#fff !important',
        borderRadius: '6% !important',
        fontSize: '13px !important',
        fontFamily: '"Montserrat", sans-serif !important',
        fontWeight: '700 !important',
        color: '#131718 !important',
        textAlign: 'left  !important',
        textTransform: 'none !important',
        // transition: 'all 10s ease !important',
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
        fontWeight: '700 !important',
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
    },
    AccessoriesFilter: {
        position: 'relative !important',
    },
}));