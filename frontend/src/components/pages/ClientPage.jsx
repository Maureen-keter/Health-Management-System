import React, { useState, useEffect } from "react";
import { BASE_URL } from '../../api';
import ClientList from "../ClientList";
import ClientForm from "../ClientForm"; 


function ClientPage() {
  const [clients, setClients] = useState([]); 
  const [selectedClient, setSelectedClient] = useState(null); 


  useEffect(() => {
    fetch(`${BASE_URL}/users`)
      .then((res) => res.json())
      .then((data) => setClients(data)) 
      .catch((err) => console.error("Error fetching clients:", err));
  }, []); 

  function handleAddClient(newClient) {
    setClients([...clients, newClient]); 
  }
  function handleUpdateClient(updatedClient) {
    const updatedClients = clients.map((client) =>
      client.id === updatedClient.id ? updatedClient : client
    );
    setClients(updatedClients);
  }
  function handleDeleteClient(deletedClientId) {
    const filteredClients = clients.filter(
      (client) => client.id !== deletedClientId 
    );
    setClients(filteredClients);
  }

  function handleClientClick(clientId) {
    fetch(`${BASE_URL}/users/${clientId}`)
      .then((res) => res.json())
      .then((data) => setSelectedClient(data)) 
      .catch((err) => console.error("Error fetching client details:", err));
  }

  return (
    <div className="client-page">
      <h1>Client Management</h1>
      
      <ClientForm onAddClient={handleAddClient} /> 
      <ClientList
        clients={clients}
        onUpdateClient={handleUpdateClient}
        onDeleteClient={handleDeleteClient}
        onClientClick={handleClientClick}
      />
      {selectedClient && <ClientProfile client={selectedClient} />}
    </div>
  );
}

export default ClientPage;

