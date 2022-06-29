import { Switch } from '@mui/material'
import React from 'react'
import { useDrag } from 'react-dnd'

const SwitchDR = () => {
    const [{isDragging},drag] = useDrag({
        type:'component',
        collect: (monitor)=> ({
            isDragging: !!monitor.isDragging(),
        })
    })
  return (
    <Switch ref={drag} />
  )
}

export default SwitchDR