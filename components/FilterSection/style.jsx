import { makeStyles } from "@mui/styles";

export const filterSectionStyle = makeStyles((theme) => ({
    filterSectionContainer: {
        position: 'fixed',
    },
    filterCheckbox: {
        marginLeft: '0',
        marginBottom: '0',
        marginTop: '0',
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
        lineHeight: '18px !important',
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
    },
    responsiveFilterChecked: {
        cursor: 'pointer !important',
        fontWeight: '800 !important',
        color: '#219ebc !important',
    },
}));