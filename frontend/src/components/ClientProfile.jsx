import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'; 
import { BASE_URL } from "../api";
import '../styles/ClientProfile.css';

function ClientProfile() {
  const { clientId } = useParams(); 
  const [client, setClient] = useState(null);

  console.log(clientId)

  useEffect(() => {
    fetch(`${BASE_URL}/users/${clientId}`)
      .then((res) => res.json())
      .then((data) => setClient(data))
      .catch((err) => console.error("Error fetching client details:", err));
  }, [clientId]);  

  if (!client) {
    return <p>Loading...</p>;
  }

  return (
    <div className="client-profile">
      <h3>Client Profile</h3>
      <p><strong>Name:</strong> {client.name}</p>
      <p><strong>Email:</strong> {client.email}</p>
      <p><strong>Contact:</strong> {client.contact}</p>

      <h4>Enrolled Programs</h4>
      {client.enrollments && client.enrollments.length > 0 ? (
        <ul>
          {client.enrollments.map((enrollment) => (
            <li key={enrollment.id}>
              <strong>{enrollment.name}</strong>: {enrollment.description}
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
