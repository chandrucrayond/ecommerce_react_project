import { makeStyles } from "@mui/styles";

export const appHeaderStyle = makeStyles((theme) => ({
    header: {
        backgroundColor: '#ffffff !important',
    },
    username: {
        fontWeight: "bold !important", 
        display: "inline !important", 
        textAlign: "right !important",
        color: "black !important", 
    },
    logoImageSection: {
        display: "flex",
        justifyContent: "center",
        alignSelf: "center",
    },
}));