import React, { useState, useEffect } from 'react';
import ProgramList from '../ProgramList';
import { BASE_URL } from '../../api';
import ProgramForm from '../ProgramForm';
import '../../styles/ProgramPage.css';

function ProgramPage() {
    const [programs, setPrograms] = useState([]);

    useEffect(() => {
        fetch(`${BASE_URL}/programs`)
            .then((res) => res.json())
            .then((data) => setPrograms(data))
            .catch((err) => console.error("Error fetching programs:", err));
    }, []);

    function handleAddProgram(newProgram) {
        setPrograms([...programs, newProgram]);
    }

    function handleDeleteProgram(deletedProgram) {
        const updatedPrograms = programs.filter((program) => program.id !== deletedProgram.id);
        setPrograms(updatedPrograms);
    }

    function handleUpdatedProgram(updatedProgram) {
        const updatedPrograms = programs.map((program) =>
            program.id === updatedProgram.id ? updatedProgram : program
        );
        setPrograms(updatedPrograms);
    }

    return (
        <div className='ProgramPage'>
            <div className='programsContainer'>
                <h1>Manage Programs</h1>
                <p>Create, Edit, and Delete Programs</p>
                <div className="programsContent">
                    <ProgramForm onAddProgram={handleAddProgram} />
                    <ProgramList programs={programs} onEdit={handleUpdatedProgram} onDelete={handleDeleteProgram} />
                </div>
            </div>
        </div>
    );
}

export default ProgramPage;
