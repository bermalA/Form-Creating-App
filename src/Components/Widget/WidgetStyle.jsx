import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    widget: {
        display: 'flex',
        background: 'white',
        justifyContent: 'space-between',
        flex: 1,
        padding: 10,
        margin: 10,
        boxShadow: '2px 4px 10px 1px rgba(201,201,201,.47)',
        borderRadius: 10,
        height: 120,
    },
    left: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    right: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    counter: {
        fontSize: 28,
        fontWeight: 300
    },
    link: {
        width: 'max-content',
        fontSize: 12,
        borderBottom: '1px solid gray'
    },
    percentage: {
        display: 'flex',
        alignItems: 'center',
        fontSize: 14
    }
})

export default useStyles