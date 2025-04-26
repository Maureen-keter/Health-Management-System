import React from "react";

function ClientProfile({ client }) {
  return (
    <div className="client-profile">
      <h3>{client.name}</h3>
      <p>Email: {client.email}</p>
      <p>Contact: {client.contact}</p>

      <h4>Enrolled Programs</h4>
      {client.enrollments && client.enrollments.length > 0 ? (
        <ul>
          {client.enrollments.map((program) => (
            <li key={program.id}>
              <strong>{program.name}</strong> - {program.description}
            </li>
          ))}
        </ul>
      ) : (
        <p>No programs enrolled.</p>
      )}
    </div>
  );
}

export default ClientProfile;
