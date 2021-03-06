import { Ballot, CheckBox, Crop54, EditAttributes, FontDownload, HorizontalSplit, Input, RadioButtonChecked, Tab, TextFields, ViewColumn } from "@mui/icons-material"
import { Button, Container, IconButton, MenuItem, Select, TextField, Typography, unstable_useId } from "@mui/material"
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


const Page = () => {
  const classes = useStyles();
  const Objects = [];
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
  const [labeler, setLabeler] = useState("");
  const ID = [1,2,3,4,5,6,7,8,9];
  const [defaultCheck, setDefaultCheck] =useState("spes");
  const AddLabel = () =>{
    const [textInput, setTextInput] = useState("");
    const handleTextInput = (event) => {
      setTextInput(event.target.value);
    }
    const handleTextSubmit = (event) => {
      console.log(Objects);
      setLabeler(textInput);
      event.preventDefault();
      shwVisible();
    }
    return <div 
      style={{display:'flex', flexDirection: 'column'}}>
        <form onSubmit={handleTextSubmit}>
      <TextField 
      label='Name' 
      variant="standard"
      value={textInput}
      onChange={handleTextInput}
      />
      <Button 
      type="submit"
      style={{margin: 20, marginLeft: 150}}>
        SAVE
      </Button>
        </form>
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
                return <InputField onClick={()=>{shwVisible()}} label={labeler}/>
              })}
              {btn.map((data, i) => {
                const obj = {id: {ID}, comp: <ButtonDR />}
                Objects.push(obj)
                console.log(Objects)
                return obj.comp
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
          <div className="saving" style={{background: 'ghostwhite'}}>
              <div className="table" style={{backgrpund: 'white', display:'flex', flexDirection:'column', marginLeft: 10, paddingTop: 30}}>
                <Select value={defaultCheck} style={{width: 200}}>
                  <MenuItem value="spes" disabled>Spesifications</MenuItem>
                  <MenuItem value="send" onClick={()=> setDefaultCheck("send")}>Send</MenuItem>
                </Select>
                <div className="buttons" style={{display:'flex', flexDirection: 'row', marginTop: 10, marginLeft: 50}}>
                <Button>SAVE REPORT</Button>
                <Button>RESET</Button>
                </div>
              </div>
          </div>
          <div className={classes.attributes}>
              {visible ? <AddLabel /> : "Please choose an item to edit"}
          </div>
      </div>
    </div>
  )
}
export default Page
