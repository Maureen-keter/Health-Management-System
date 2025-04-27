import React, { useState } from "react";
import { BASE_URL } from "../api";
import '../styles/ClientForm.css'

function ClientForm({ onAddClient }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    contact: "",
  });
  const [error, setError] = useState(""); 

  const { name, email, password, contact } = formData;

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`${BASE_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to add client. Status: ${res.status}`);
        }
        return res.json();
      })
      .then((newClient) => {
        onAddClient(newClient); 
        setFormData({
          name: "",
          email: "",
          password: "",
          contact: "",
        });
        setError("");  
        window.alert("Client added successfully!"); 
      })
      .catch((err) => {
        setError(err.message); 
      });
  }

  return (
    <form className="new-client" onSubmit={handleSubmit}>
      {error && <div className="error-message">{error}</div>}

      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Password:
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Contact:
        <input
          type="text"
          name="contact"
          value={contact}
          onChange={handleChange}
          required
        />
      </label>

      <button type="submit">Add Client</button>
    </form>
  );
}

export default ClientForm;
