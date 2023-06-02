import { makeStyles } from '@mui/styles';

export const buyNowStyle = makeStyles({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalContent: {
        outline: 'none',
        position: 'relative',
        maxWidth: '800px',
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        borderRadius: theme.shape.borderRadius,
        padding: theme.spacing(2),
    },
    modalTitle: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        marginBottom: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        top: theme.spacing(1),
        right: theme.spacing(1),
    },
    modalBody: {
        marginTop: theme.spacing(2),
    },
    productImage: {
        width: '100%',
    },
    productName: {
        fontWeight: 'bold',
    },
    productSerialNo: {
        color: theme.palette.text.secondary,
    },
    modalSection: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(1),
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    modalSectionLabel: {
        marginRight: theme.spacing(2),
    },
    modalSectionValue: {
        fontWeight: 'bold',
    },
    addressSection: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(1),
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    addressName: {
        fontWeight: 'bold',
    },
    addressContent: {
        flex: 1,
        marginRight: theme.spacing(1),
        marginLeft: theme.spacing(1),
    },
    editButton: {
        cursor: 'pointer',
        color: theme.palette.primary.main,
    },
    addButton: {
        cursor: 'pointer',
        color: theme.palette.primary.main,
        marginRight: theme.spacing(1),
    },
    saveButton: {
        cursor: 'pointer',
        color: theme.palette.info.main,
    },
    inputLabel: {
        fontWeight: 'bold',
    },
    inputField: {
        width: '100%',
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        padding: theme.spacing(1),
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: theme.shape.borderRadius,
    },
    dropdownLabel: {
        fontWeight: 'bold',
    },
    dropdownButton: {
        width: '100%',
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        padding: theme.spacing(1),
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: theme.shape.borderRadius,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        textDecoration: 'none',
        color: 'inherit',
    },
    dropdownMenu: {
        minWidth: '200px',
    },
    summarySection: {
        padding: theme.spacing(2),
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: theme.shape.borderRadius,
    },
    summaryTitle: {
        fontWeight: 'bold',
        marginBottom: theme.spacing(2),
    },
    summaryItem: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: theme.spacing(1),
    },
    summaryTotal: {
        fontWeight: 'bold',
    },
    payButton: {
        marginTop: theme.spacing(2),
        backgroundColor: theme.palette.info.main,
        color: theme.palette.common.white,
        '&:hover': {
            backgroundColor: theme.palette.info.dark,
        },
    },
});