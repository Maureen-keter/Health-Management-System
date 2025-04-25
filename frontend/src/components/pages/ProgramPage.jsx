import React, {useState, useEffect} from 'react';
import ProgramList from '../ProgramList';
import {BASE_URL} from '../api';
import ProgramForm from '../ProgramForm';



function ProgramPage() {
    const [programs, setPrograms]=useState([]);

    useEffect(()=>{
        fetch(`${BASE_URL}/programs`)
        .then((res)=>res.json())
        .then((data)=>setPrograms(data))
        .catch((err) => console.error("Error fetching programs:", err));
    }, [])

    function handleAddProgram(newProgram){        
        setPrograms([...programs, newProgram])
  }

    function handleDeleteProgram(deletedProgram){
        const updatedPrograms=programs.filter((program)=>program.id !==deletedProgram.id);
        setPrograms(updatedPrograms)
      }

    function handleUpdatedProgram(updatedProgram){
        const updatedPrograms=programs.map((program)=>{
            if (program.id===updatedProgram.id){
                return updatedProgram
            }
            else{
                return program;
            }
        });
        setPrograms(updatedPrograms)
    }


  return (
    <div className='programs-page'>
        <ProgramList programs={programs} onEdit={handleUpdatedProgram} onDelete={handleDeleteProgram}/>
        <ProgramForm onAddProgram={handleAddProgram} />
    </div>
  )
}

export default ProgramPage;