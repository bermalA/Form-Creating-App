import { TextField } from '@mui/material'
import React from 'react'
import { useDrag } from 'react-dnd'

const InputField = (props) => {
    const [{isDragging}, drag] = useDrag(()=>({
        type: 'component',
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }))
  return (
    <TextField ref={drag} label={props.label} />
  )
}

export default InputField