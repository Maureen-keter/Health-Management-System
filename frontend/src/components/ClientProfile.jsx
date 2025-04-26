import React, { useEffect, useState } from "react";
import { BASE_URL } from "../api"; 

function ClientProfile({ client }) {
  const [programs, setPrograms] = useState([]); 

  useEffect(() => {
    if (client && client.id) {
      fetch(`${BASE_URL}/users`)
        .then((res) => res.json())
        .then((data) => setPrograms(data)) 
        .catch((err) => console.error("Error fetching programs:", err));
    }
  }, [client]); 

  return (
    <div className="client-profile">
      <h3>{client.name}</h3>
      <p>Email: {client.email}</p>
      <p>Contact: {client.contact}</p>

      <h4>Enrolled Programs</h4>
      <ul>
        {programs.length > 0 ? (
          programs.map((program) => (
            <li key={program.id}>
              <strong>{program.name}</strong> - {program.description}
            </li>
          ))
        ) : (
          <p>No programs enrolled.</p>
        )}
      </ul>
    </div>
  );
}

export default ClientProfile;
