const bodyLayout = (theme) => ({
    container: {
        display: 'flex',
        minHeight: '100px',
        justifyContent: 'space-between',
        marginTop: "0rem",
        padding: "0.75rem",
        backgroundColor: `${theme.palette.primary.main} !important`,
        paddingBottom: "0rem",
        fontSize: "13px",
        color: theme.palette.secondary.main
    },
    button: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.secondary.main
    },
});
export default bodyLayout;