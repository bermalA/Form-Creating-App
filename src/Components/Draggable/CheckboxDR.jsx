import { Checkbox } from '@mui/material'
import React from 'react'
import { useDrag } from 'react-dnd'

const CheckboxDR = () => {
    const [{isDragging}, drag] = useDrag(()=>({
        type: 'component',
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }))
  return (
    <Checkbox ref={drag} style={{border: isDragging ? '5px solid pink' : '0'}}/>
  )
}

export default CheckboxDR