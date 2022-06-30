import { TextField } from '@mui/material'
import React from 'react'
import { useDrag } from 'react-dnd'

const InputField = (props) => {
    const [{isDragging}, drag] = useDrag(()=>({
        type: 'component',
        item: 'Item',
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }))
  return (
    <TextField ref={drag} label={props.label} onClick={props.onClick} />
  )
}

export default InputField