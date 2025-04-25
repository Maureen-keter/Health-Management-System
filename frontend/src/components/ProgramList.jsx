import React from 'react';
import ProgramItem from './ProgramItem';

function ProgramList({ programs, onEdit, onDelete }) {
  return (
    <div className='program-list'>
      <h2 className="health-programs">Our Health Programs</h2>

      {programs.length === 0 ? (
        <p className="no-program">No Programs Available</p>
      ) : (
        programs.map((program) => (
          <ProgramItem
            key={program.id}
            name={program.name}
            description={program.description}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
}

export default ProgramList;
