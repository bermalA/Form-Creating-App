import React from 'react'
import Leftbar from '../../Components/LeftBar/Leftbar'
import Navbar from '../../Components/Navbar/Navbar'
import Widget from '../../Components/Widget/Widget'
import useStyles from './HomeStyle'

const Home = () => {
    const home = useStyles()
  return (
    <div className={home.home}>
        <Leftbar />
        <div className={home.container}>
            <Navbar />
            <div className={home.page}>
                <Widget />
                <Widget />
                <Widget />
            </div>
            <div className={home.page}>
            <Widget />
            </div>
            <div className={home.page}>
              <Widget />
            </div>
        </div>
    </div>
  )
}

export default Home