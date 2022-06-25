import { Button, TextField } from '@mui/material';
import React, { useState } from 'react'

const Control1 = () => {
    const [val, setVal] = useState([]);
    const [id, setId] = useState(0);
    const handleId = (props)=>{
        setId(props);
    }
    const handleAdd = () => {
        const add = [...val, []];
        setVal(add);
    };
  return (
    <div className='changable'>
        <Button onClick={() => {handleAdd();handleId(1)}}>TextF</Button>
        <Button onClick={() =>{handleAdd(); handleId(2)}}>Button</Button>
        {val.map((data, i)=>{
                switch (id) {
                    case 1:
                        return <TextField></TextField>
                        break;

                    case 2: 
                        return <Button>STH</Button>
                        break;
                
                    default:
                        break;
                }
        })}

    </div>
  )
}

export default Control1