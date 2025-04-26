import React, { useEffect, useState } from "react";
import { BASE_URL } from "../api"; 

function ClientProfile({ client }) {
  const [programs, setPrograms] = useState([]); 

  return (
    <div className="client-profile">
      <h3>{client.name}</h3>
      <p>Email: {client.email}</p>
      <p>Contact: {client.contact}</p>
      <h4>Enrolled Programs</h4>
    </div>
  );
}

export default ClientProfile;
