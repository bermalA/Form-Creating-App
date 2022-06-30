import { Ballot, CheckBox, Crop54, EditAttributes, FontDownload, HorizontalSplit, Input, RadioButtonChecked, Tab, TextFields, ViewColumn } from "@mui/icons-material"
import { Button, Container, IconButton, TextField, Typography } from "@mui/material"
import BoardSec from "../../Components/Draggable/BoardSection"
import ButtonDR from "../../Components/Draggable/Button"
import CheckboxDR from "../../Components/Draggable/CheckboxDR"
import InputField from "../../Components/Draggable/Input"
import RadioDR from "../../Components/Draggable/RadioDR"
import SelectDR from "../../Components/Draggable/SelectDR"
import SwitchDR from "../../Components/Draggable/SwitchDR"
import Leftbar from "../../Components/LeftBar/Leftbar"
import Navbar from "../../Components/Navbar/Navbar"
import useStyles from "./PageStyle"
import { useState } from "react"
import BoardGrid from "../../Components/Draggable/BoardGrid"
import { useFormik } from "formik"


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
  const [visible, setVisible] = useState(false);
  const shwVisible = () => {
    setVisible(!visible);
  }

  const AddLabel = () =>{
    

    return <div 
      style={{display:'flex', flexDirection: 'column'}}>
      <TextField 
      label='Name' 
      variant="standard"
      />
      <Button 
      style={{margin: 20, marginLeft: 150}}>
        SAVE
      </Button>
    </div>
  }

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
                return <BoardSec />
              })}
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                {grid.map((data, i) => {
                  return <BoardGrid />
              })}
              </div>
              {textf.map((data, i) => {
                return <InputField onClick={()=>{shwVisible()}}/>
              })}
              {btn.map((data, i) => {
                return <ButtonDR />
              })}
              {slct.map((data, i) => {
                return <SelectDR />
              })}
              {swch.map((data,i)=>{
                return <SwitchDR/>
              })}
              {chck.map((data, i) => {
                return <CheckboxDR />
              })}
              {rad.map((data,i)=>{
                return <RadioDR />
              })}
            </form>
          </div>
        </div>
      </Container>
      <div className={classes.rightbar}>
          <div className="attributes" style={{margin: 30}}>
              {visible ? <AddLabel /> : "Please choose an item to edit"}
          </div>
      </div>
    </div>
  )
}
export default Page
