import { Ballot, CheckBox, Crop54, EditAttributes, FontDownload, HorizontalSplit, Input, RadioButtonChecked, Tab, TextFields, ViewColumn } from "@mui/icons-material"
import { Button, Checkbox, Container, Grid, IconButton, MenuItem, Radio, Select, Switch, TextField, Typography } from "@mui/material"
import { useState } from "react"
import Leftbar from "../Components/LeftBar/Leftbar"
import Navbar from "../Components/Navbar/Navbar"
import useStyles from "./PageStyle"


const Page = () => {
  const classes = useStyles()
  const [section, setSection] = useState([]);
  const [grid, setGrid] = useState([]);
  const [textf, setTextf] = useState([]);
  const [btn, setBtn] = useState([]);
  const [slct, setSlct] = useState([]);
  const [swch, setSwch] = useState([]);
  const [chck, setChck] = useState([]);
  const [rad, setRad] = useState([]);

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
              <Typography variant="body1" style={{ paddingLeft: 10 }}>Main</Typography>
              <div className={classes.container}>
                <div className={classes.formItem}>
                  <IconButton size="large" onClick={() => { const a = [...section, []]; setSection(a); }}><HorizontalSplit /></IconButton>
                  <span>Section</span>
                </div>
                <div className={classes.formItem}>
                  <IconButton size="large" onClick={() => { const b = [...grid, []]; setGrid(b); }}><ViewColumn /></IconButton>
                  <span>Grid</span>
                </div>
                <div className={classes.formItem}>
                  <IconButton size="large"><Tab /></IconButton>
                  <span>Navigation</span>
                </div>
              </div>
            </div>
            <div className={classes.header}>
              <Typography variant="body1">Sub</Typography>
              <div className={classes.container}>
                <div className={classes.formItem}>
                  <IconButton size="large" onClick={() => { const c = [...textf, []]; setTextf(c); }}><Input /></IconButton>
                  <span>Input</span>
                </div>
                <div className={classes.formItem}>
                  <IconButton size="large" onClick={() => { const d = [...btn, []]; setBtn(d); }}><Crop54 /></IconButton>
                  <span>Button</span>
                </div>
              </div>
            </div>
            <div className={classes.container}>
              <div className={classes.formItem}>
                <IconButton size="large"><TextFields /></IconButton>
                <span>Textfield</span>
              </div>
              <div className={classes.formItem}>
                <IconButton size="large"><FontDownload /></IconButton>
                <span>Static text</span>
              </div>
            </div>
            <div className={classes.container}>
              <div className={classes.formItem}>
                <IconButton size="large" onClick={() => { const e = [...slct, []]; setSlct(e) }}><Ballot /></IconButton>
                <span>Multiselect</span>
              </div>
              <div className={classes.formItem}>
                <IconButton size="large" onClick={()=>{ const i = [...swch,[]]; setSwch(i)}}><EditAttributes /></IconButton>
                <span>Select Box</span>
              </div>
            </div>
            <div className={classes.container}>
              <div className={classes.formItem}>
                <IconButton size="large" onClick={() => { const f = [...chck, []]; setChck(f); }}><CheckBox /></IconButton>
                <span>Checkbox</span>
              </div>
              <div className={classes.formItem}>
                <IconButton size="large" onClick={() => { const g = [...rad, []]; setRad(g); }}><RadioButtonChecked /></IconButton>
                <span>Radio Button</span>
              </div>
            </div>
          </div>
          <div className={classes.right}>
            <form action="" style={{ marginTop: 20 }}>
              {section.map((data, i) => {
                return <Container style={{ background: 'white', height: 50, width: '100vh', margin: 10 }}>somethşng</Container>
              })}
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                {grid.map((data, i) => {
                  return <Container style={{ background: 'white', flex: 1, flexDirection: 'row', flexWrap: 'Wrap' }}>grid</Container>
                })}
              </div>
              {textf.map((data, i) => {
                return <TextField />
              })}
              {btn.map((data, i) => {
                return <Button variant='contained'>Sth</Button>
              })}
              {slct.map((data, i) => {
                return <Select>
                  <MenuItem>1</MenuItem>
                </Select>
              })}
              {swch.map((data,i)=>{
                return <Switch />
              })}
              {chck.map((data, i) => {
                return <Checkbox />
              })}
              {rad.map((data,i)=>{
                return <Radio />
              })}
            </form>
          </div>
        </div>
      </Container>
    </div>
  )
}
export default Page
