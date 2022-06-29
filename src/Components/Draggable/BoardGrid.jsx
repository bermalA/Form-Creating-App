import React from 'react'
import { useDrop } from 'react-dnd'

const BoardGrid = ({addComponent}) => {
    const [{isOver}, drop] = useDrop({
        accept: 'component',
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        }),
        drop: () => ({addComponent})
    })
  return (
    <div ref={drop} style={{background: 'white', margin: 5, minHeight: 100, flex: 1, flexDirection: 'row', flexWrap: 'wrap', border: isOver ? '5px solid whitesmoke' : '0'}}></div>
  )
}

export default BoardGrid