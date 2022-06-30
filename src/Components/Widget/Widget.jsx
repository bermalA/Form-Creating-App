import { KeyboardArrowUp, PersonOutlined } from '@mui/icons-material'
import { Chip } from '@mui/material'
import users from '../../data/user'
import useStyles from './WidgetStyle'


const Widget = () => {
  const widget = useStyles()
  return (
    <div className={widget.widget}>
        <div className={widget.left}>
            <Chip variant='outlined' label="USERS"/>
            <span className={widget.counter}>{users.length}</span>
            <span className={widget.link}>See all user</span>
        </div>
        <div className={widget.right}>
          <KeyboardArrowUp />
          <PersonOutlined className={widget.icon}/>
        </div>
    </div>
  )
}

export default Widget