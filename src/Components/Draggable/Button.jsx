import { Button } from '@mui/material'
import React from 'react'
import { useDrag } from 'react-dnd'

const ButtonDR = () => {
    const [{isDragging},drag] = useDrag({
        type: 'component',
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    })
  return (
    <Button ref={drag} variant='outlined'>label</Button>
  )
}

export default ButtonDR