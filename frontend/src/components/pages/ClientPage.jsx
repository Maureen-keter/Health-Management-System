import '../../styles/ClientPage.css'; 
import React, { useState, useEffect } from "react";
import { BASE_URL } from '../../api';
import ClientList from "../ClientList";
import ClientForm from "../ClientForm";

function ClientPage() {
  const [clients, setClients] = useState([]);

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

  return (
    <div className="client-page">
      <h1 className="client-page-title">Client Management</h1>

      <div className="client-page-content">
        <ClientForm onAddClient={handleAddClient} />
        <ClientList
          clients={clients}
          onUpdateClient={handleUpdateClient}
          onDeleteClient={handleDeleteClient}
        />
      </div>
    </div>
  );
}

export default ClientPage;
