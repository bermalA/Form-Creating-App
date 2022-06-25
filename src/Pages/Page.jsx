import { Ballot, CheckBox, Crop54, EditAttributes, FontDownload, HorizontalSplit, Input, RadioButtonChecked, Tab, TextFields, ViewColumn } from "@mui/icons-material"
import { Button, Chip, Container, Grid, IconButton, TextField, Typography } from "@mui/material"
import { useState } from "react"
import Leftbar from "../Components/LeftBar/Leftbar"
import Navbar from "../Components/Navbar/Navbar"
import useStyles from "./PageStyle"


const Page = () => {
    const classes = useStyles()
    const [value, setValue] = useState([]);
    const [val, setVal] = useState([]);
    const [v, setV] = useState([]);

  return (
    <div className={classes.home}>
      <Leftbar />
      <Container className={classes.homeContainer}>
        <Navbar />
        <div className={classes.page}>
            <div className={classes.left}>
              <div className={classes.top}>
                <Typography variant="h6">ITEMS</Typography>
              </div>
              <div className={classes.header}>
                <Typography variant="body1" style={{paddingLeft: 10}}>Main</Typography>
                <div className={classes.container}>
                  <div className={classes.formItem}>
                    <IconButton size="large" onClick={() => {const a = [...value, []]; setValue(a);}}><HorizontalSplit /></IconButton>
                    <span>Section</span>
                  </div>
                  <div className={classes.formItem}>
                    <IconButton size="large" ><ViewColumn /></IconButton>
                    <span>Grid</span>
                  </div>
                  <div className={classes.formItem}>
                    <IconButton size="large" onClick={() => {const dnm = [...value, []]; setValue(dnm);}}><Tab /></IconButton>
                    <span>Navigation</span>
                  </div>
                </div>
              </div>
              <div className={classes.header}>
                <Typography variant="body1">Sub</Typography>
                <div className={classes.container}>
                  <div className={classes.formItem}>
                    <IconButton size="large"><Input /></IconButton>
                    <span>Input</span>
                  </div>
                  <div className={classes.formItem}>
                    <IconButton size="large"><Crop54 /></IconButton>
                    <span>Button</span>
                  </div>
                </div>
              </div>
                <div className={classes.container}>
                  <div className={classes.formItem}>
                    <IconButton><TextFields /></IconButton>
                    <span>Textfield</span>
                  </div>
                  <div className={classes.formItem}>
                    <IconButton><FontDownload /></IconButton>
                    <span>Static text</span>
                  </div>
                </div>
                <div className={classes.container}>
                  <div className={classes.formItem}>
                    <IconButton><Ballot /></IconButton>
                    <span>Multiselect</span>
                  </div>
                  <div className={classes.formItem}>
                    <IconButton><EditAttributes /></IconButton>
                    <span>Select Box</span>
                  </div>
                </div>
                <div className={classes.container}>
                  <div className={classes.formItem}>
                    <IconButton><CheckBox /></IconButton>
                    <span>Checkbox</span>
                  </div>
                  <div className={classes.formItem}>
                    <IconButton><RadioButtonChecked /></IconButton>
                    <span>Radio Button</span>
                  </div>
                </div>
            </div>
            <div className={classes.right}>
              {value.map((data, i)=>{
                return <div style={{background: "white", minHeight: 50}}>section</div>
              })}
            </div>
        </div>
      </Container>
    </div>
  )
}

export default Page
