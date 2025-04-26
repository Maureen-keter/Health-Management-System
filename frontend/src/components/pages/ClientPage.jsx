import React, { useState, useEffect } from "react";
import { BASE_URL } from '../../api';


function ClientPage() {
  const [clients, setClients] = useState([]); 


  useEffect(() => {
    fetch(`${BASE_URL}/users`)
      .then((res) => res.json())
      .then((data) => setClients(data)) 
      .catch((err) => console.error("Error fetching clients:", err));
  }, []); 



  return (
    <div className="client-page">
      <h1>Client Management</h1>
    </div>
      
      )
}

export default ClientPage;
