import React from 'react'

function ProgramItem({name, description, onDelete, onEdit}) {
  return (
    <div>
        <h2 className="program-name">{name}</h2>
        <p className="decription">{description}</p>
        <button onClick={onEdit}>EDIT</button>
        <button onClick={onDelete}>DELETE</button>
    </div>
  )
}

export default ProgramItem;