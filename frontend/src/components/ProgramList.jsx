import React from 'react';
import ProgramItem from './ProgramItem';
import '../styles/ProgramList.css';

function ProgramList({ programs, onEdit, onDelete }) {
  return (
    <div className='program-list'>
      <h2 className="health-programs">Our Health Programs</h2>

      {programs.length === 0 ? (
        <p className="no-program">No Programs Available</p>
      ) : (
        <div className="programs-container">
          {programs.map((program) => (
              <ProgramItem
              key={program.id}
              program={program}
              onEdit={onEdit}
              onDelete={onDelete}
              />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProgramList;
