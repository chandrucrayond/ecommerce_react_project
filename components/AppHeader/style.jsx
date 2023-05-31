import { makeStyles } from "@mui/styles";

export const appHeaderStyle = makeStyles((theme) => ({
    header: {
        backgroundColor: '#ffffff !important',
        // boxShadow: 'none !important',
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
    paraSection: {
        display: "flex",
        justifyContent: "center",
        alignSelf: "center",
        color: "black",
    },
    appHeaderPara: {
        fontSize: "13px !important",
        lineHeight: "18px !important",
        fontFamily: "Montserrat , sans-serif !important",
        fontWeight: "400 !important",
        color: "#4e6e7e !important",
        opacity: "1 !important",
        cursor: "pointer !important",
    },
    appHeaderParaSelected: {
      position: 'relative',
      top: '3px',
    //   content: '\2022',
      color: '#219ebc',
      fontSize: '2em',
      lineHeight: '0.5',
      marginRight: '3px',
      fontWeight: '600',
    },
}));