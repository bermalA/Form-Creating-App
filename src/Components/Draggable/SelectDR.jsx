import { MenuItem, Select } from '@mui/material'
import { useDrag } from 'react-dnd'
import React from 'react'

const SelectDR = () => {
    const [{isDragging}, drag] = useDrag(()=>({
        type: 'component',
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }))
  return (
    <Select ref={drag}>
        <MenuItem ref={drag}>1</MenuItem>
    </Select>
  )
}

export default SelectDR