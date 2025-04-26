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

  return (
    <div className="client-list-container">
      
      </div>

      
  );
}

export default ClientList;
