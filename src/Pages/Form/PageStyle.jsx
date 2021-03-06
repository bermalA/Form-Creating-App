import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) => ({
    home: {
        display: 'flex',
        margin: 0,
        padding: 0
    },
    homeContainer: {
        flex: 3
    },
    page: {
        display: 'flex',
        height: '90vh',
        gap: 10
    },
    left: {
        flex: 1,
        float: 'left',
    },
    right: {
        background: 'ghostwhite',
        flex: 3,
        float: 'right',
        height: '100vh',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        flexDirection: 'column'
    },
    top: {
        background: 'whitesmoke',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        marginTop: 20,
        background: 'ghostwhite'
    },
    container: {
        fontSize: 14,
        paddingTop: 25,
        background: 'ghostwhite',
        display: 'flex',
        justifyContent: 'space-evenly'
    },
    formItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    gridItem: {
        background: 'ghostwhite'
    },
    rightbar:  {
        height: '100vh',
        flex: 1, 
        marginTop: 60,
        margin: 10
    },
    attributes: {
        height : '75vh',
        flex: 1,
        background:'ghostwhite',
        marginTop: 20,
        padding: 30
    }
}));

export default useStyles;