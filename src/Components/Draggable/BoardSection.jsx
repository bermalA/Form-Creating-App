import { Button } from '@mui/material';
import React from 'react'
import { useDrop } from 'react-dnd'

const BoardSec = (props) => {
  const Objs = [];
    const [{isOver}, drop] = useDrop({
        accept: 'component',
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        }),
      })
  return (
    <div ref={drop} style={{width: '100vh', minHeight: 100, background: 'white',margin: 10, border: isOver ? '5px solid whitesmoke' : '0'}}>
      {isOver ? <Button/> : ""}
    </div>
  )
}

export default BoardSec