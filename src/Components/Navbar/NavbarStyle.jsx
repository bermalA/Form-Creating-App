import {makeStyles} from "@mui/styles"

const useStyles = makeStyles({
    navbar: {
        height: 60,
        display: 'flex',
        alignItems: 'center',
        fontSize: 14,
        color: 'gray'
    },
    wrapper: {
        width: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: 20,
        position: 'fixed',
        right: 10
    },
    items: {
        display: 'flex'
    },
    icon: {
        fontSize: 20
    }
})

export default useStyles