import React, { useState } from "react";
import {BASE_URL} from "../api"

function ProgramForm({onAddProgram}) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e){
    e.preventDefault();
    const programData={
      name:name,
      description:description,

    };
    fetch(`${BASE_URL}`,{
      method:"POST",
      headers:{
        'Content-Type':"application/json",
      },
      body:JSON.stringify(programData),
    })
    .then((res)=>res.json())
    .then((newProgram)=>onAddProgram(newProgram))

    setName("")
    setDescription("")
  };



  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label>
        Category:
        <input
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        </label>
      <button type="submit">Add to List</button>
    </form>
  );
}


export default ProgramForm;
