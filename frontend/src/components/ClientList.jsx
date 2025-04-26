import React, { useState } from "react";
import { BASE_URL } from "../api";

function ClientList({ clients, onUpdateClient, onDeleteClient, onClientClick }) {
  
  const [searchEmail, setSearchEmail] = useState("");
  const [editingClientId, setEditingClientId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    name: "",
    email: "",
    contact: "",
    password: "",
  });

  const filteredClients = clients.filter((client) =>
    client.email.toLowerCase().includes(searchEmail.toLowerCase())
  );

   // Delete a client by ID
   function handleDelete(clientId) {
    fetch(`${BASE_URL}/users/${clientId}`, { method: "DELETE" })
      .then((res) => {
        if (res.ok) onDeleteClient(clientId);
        else throw new Error("Delete failed");
      })
      .catch((err) => console.error("Error deleting:", err));
  }

  return (
    <div className="client-list-container">
      
      </div>

      
  );
}

export default ClientList;
