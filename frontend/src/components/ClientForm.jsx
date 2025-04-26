import React, { useState } from "react";
import { BASE_URL } from "../api";

function ClientForm({ onAddProgram }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    contact: "",
  });

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
      .then((res) => res.json())
      .then((newClient) => {
        onAddProgram(newClient);
        setFormData({
          name: "",
          email: "",
          password: "",
          contact: "",
        });
      })
  }

  return (
    <form className="new-client" onSubmit={handleSubmit}>
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