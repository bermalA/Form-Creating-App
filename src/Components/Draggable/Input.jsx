import { TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { useDrag } from 'react-dnd'

const InputField = (props) => {
    const [inputData, setInputData] = useState([
      {
        label: "",
        value: ""
      }
    ]);
    const handleChange = (event) => {
      const {label, value} = event.target;
      setInputData({
        ...inputData,
        [label]: label,
        [value]: value
      });
      console.log(inputData);
      event.preventDefault();
    }
    const [{isDragging}, drag] = useDrag(()=>({
        type: 'component',
        item: 'Item',
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }))
  return (
      <TextField ref={drag} 
        label={props.label} 
        onClick={props.onClick} 
        value={inputData.label} 
        onChange={handleChange}
        />
  )
}

export default InputField