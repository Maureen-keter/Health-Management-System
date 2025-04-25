import React, { useState } from 'react'
import {BASE_URL} from '../api'

function ProgramItem({program, onEdit,onDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    const[formData, setFormData]=useState({
        name:program.name,
        description:program.description
    });

    const {name, description}=formData;

    function handleChange(e){
        const {name, value}=e.target;
        setFormData({
            ...formData,
            [name]:value,
        });
    }

    function handleSubmit(e){
        e.preventDefault();
        fetch(`${BASE_URL}/program/${program.id}`,{
            method:"PATCH",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(formData)
          })
          .then((res)=>res.json())
          .then((updatedProgram)=>{
            onEdit(updatedProgram);
            setIsEditing(false);
          })
    }

    function handleDeleteClick(){
        fetch(`${BASE_URL}/programs/${program.id}`,{
          method:"DELETE",
        })
        .then((res)=>res.json())
        .then(()=>onDelete(program));
      }

  return (
    <div className='program-item'>
        {isEditing?
        <form onSubmit={handleSubmit}>
            <input type="text"
            name="name"
            value={name}
            onChange={handleChange}
            required />
            <input type="text"
            name="description"
            value={description}
            onChange={handleChange}
            required />
            <button type='submit'>Save</button>
            <button onClick={()=>setIsEditing(false)}>Cancel</button>
        </form>
        :
        <div>
        <h2 className="program-name">{program.name}</h2>
        <p className="description">{program.description}</p>
        <button onClick={()=>setIsEditing(true)}>EDIT</button>
        <button onClick={handleDeleteClick}>EDIT</button>
        </div>
          }

    </div>
  )
}

export default ProgramItem;