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
    responsiveFilterContents: {
        position: 'fixed !important',
        right: '20px !important',
        bottom: '70px !important',
        transition: 'all 0.5s ease !important',
        boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.5) !important',
        padding: '20px !important',
        backgroundColor: '#fff !important',
        borderRadius: '6% !important',
        zIndex: 9999,
    },
}));