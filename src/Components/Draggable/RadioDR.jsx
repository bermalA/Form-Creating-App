import { Radio } from '@mui/material'
import React from 'react'
import { useDrag } from 'react-dnd'

const RadioDR = () => {
    const [{isDragging},drag] = useDrag({
        type:'component',
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    })
  return (
    <Radio ref={drag} />
  )
}

export default RadioDR