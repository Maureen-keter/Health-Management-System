import React, {useState, useEffect} from 'react';
import ProgramList from '../ProgramList';
import {BASE_URL} from '../api';



function ProgramPage() {
    const [programs, setPrograms]=useState([]);

    useEffect(()=>{
        fetch(`${BASE_URL}/progams`)
        .then((res)=>res.json())
        .then((data)=>setPrograms(data))
    })
  return (
    <div className='programs-page'>
        <ProgramList programs={programs}/>
    </div>
  )
}

export default ProgramPage