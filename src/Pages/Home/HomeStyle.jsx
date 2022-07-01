import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    home: {
        display: 'flex',
        margin: 0,
        padding: 0
    },
    container: {
        flex: 3,
        background: 'ghostwhite',
    },
    page: {
        height: '23vh',
        display: 'flex',
        flexDirection: 'row'
    }
})

export default useStyles