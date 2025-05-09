import React, { useState } from "react";
import { BASE_URL } from "../api";
import '../styles/ClientList.css';  
import { Link } from 'react-router-dom';

function ClientList({ clients, onUpdateClient, onDeleteClient}) {
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

  function handleDelete(clientId) {
    fetch(`${BASE_URL}/users/${clientId}`, { method: "DELETE" })
      .then((res) => {
        if (res.ok) onDeleteClient(clientId);
        else throw new Error("Delete failed");
      })
      .catch((err) => console.error("Error deleting:", err));
  }

  function handleEditClick(client) {
    setEditingClientId(client.id);
    setEditFormData({
      name: client.name,
      email: client.email,
      contact: client.contact,
      password: client.password,
    });
  }

  function handleEditChange(e) {
    const { name, value } = e.target;
    setEditFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleEditSubmit(e) {
    e.preventDefault();

    fetch(`${BASE_URL}/users/${editingClientId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editFormData),
    })
      .then((res) => res.json())
      .then((updatedClient) => {
        onUpdateClient(updatedClient);
        setEditingClientId(null);
        setEditFormData({
          name: "",
          email: "",
          contact: "",
          password: "",
        });
      })
      .catch((err) => console.error("Error updating client:", err));
  }

  return (
    <div className="client-list-container">
      <h2 className="client-list-title">Clients</h2>

      <input
        className="search-input"
        type="text"
        placeholder="Search by email"
        value={searchEmail}
        onChange={(e) => setSearchEmail(e.target.value)}
      />

      <ul className="client-list">
        {filteredClients.length === 0 ? (
          <li className="no-clients">No clients found with that email</li>
        ) : (
          filteredClients.map((client) => (
            <li key={client.id} className="client-item">
              <div className="client-info">
                <span>{client.name}</span> – <span>{client.email}</span>
              </div>
              <div className="client-actions">
                <Link to={`/client/${client.id}`}>                
                <button>View</button>
                </Link>
                <button onClick={() => handleEditClick(client)}>Edit</button>
                <button onClick={() => handleDelete(client.id)}>Delete</button>
              </div>
            </li>
          ))
        )}
      </ul>

      {editingClientId && (
        <form onSubmit={handleEditSubmit} className="edit-client-form">
          <h3>Edit Client</h3>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={editFormData.name}
              onChange={handleEditChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={editFormData.email}
              onChange={handleEditChange}
              required
            />
          </label>
          <label>
            Contact:
            <input
              type="text"
              name="contact"
              value={editFormData.contact}
              onChange={handleEditChange}
              required
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={editFormData.password}
              onChange={handleEditChange}
              required
            />
          </label>
          <button type="submit" className="save-btn">Save Changes</button>
        </form>
      )}
    </div>
  );
}

export default ClientList;
