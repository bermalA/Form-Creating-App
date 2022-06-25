import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    sidebar: {
        flex: 1,
        minHeight: '100vh',
        background: 'white',
    },
    top: {
        height: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        fontWeight: 'bold',
        fontStyle: "oblique",
        color: "Highlight"
    },
    center: {
        paddingTop: 20,
        paddingLeft: 15,
    },
    list: {
        listStyleType: 'none',
        margin: 0,
        padding: 0,
        justifyContent: 'center'
    },
    menuContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        fontSize: 'xx-large',
        marginRight: 10
    }
  })

  export default useStyles