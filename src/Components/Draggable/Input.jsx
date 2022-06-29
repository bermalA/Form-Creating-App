import { TextField } from '@mui/material'
import React from 'react'
import { useDrag } from 'react-dnd'

const InputField = () => {
    const [{isDragging}, drag] = useDrag(()=>({
        type: 'component',
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }))
  return (
    <TextField ref={drag}/>
  )
}

export default InputField