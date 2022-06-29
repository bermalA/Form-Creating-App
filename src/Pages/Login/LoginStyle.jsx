import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    body:{
        background: 'ghostwhite',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        width: 500,
        height: 500,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    typo: {
        fontStyle: 'italic',
        color: 'Highlight',
        marginBottom: 20
    },
    textfield: {
        width: 250,
        margin: 20
    },
    container:{
        display: "flex",
        margin: 20
    },
    link: {
        float: "left",
        alignSelf : "flex-start",
        marginRight: 20,
        marginBottom: 60,
        color: "black",
    }, 
    select:{
        marginLeft: 20,
        float: "right",
        alignSelf: "flex-start",
    },
    button: {
        borderRadius: 3,
        boxShadow: '3px 3px 5px 2px rgba(120,105,135,.3)',
        color: 'lightblue',
        height: 50,
        padding: '0 30px',
        marginBottom: 60
    }
});

export default useStyles;