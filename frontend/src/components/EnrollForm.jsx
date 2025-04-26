import React, { useState, useEffect } from "react";
import { BASE_URL } from "../api";

function EnrollForm({ onEnroll }) {
  const [clients, setClients] = useState([]);
  const [programs, setPrograms] = useState([]);
  const [formData, setFormData] = useState({
    clientId: "",
    programId: ""
  });

  useEffect(() => {
    fetch(`${BASE_URL}/users`)
      .then((res) => res.json())
      .then(setClients);

    fetch(`${BASE_URL}/programs`)
      .then((res) => res.json())
      .then(setPrograms);
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`${BASE_URL}/enrollments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: formData.clientId,
        program_id: formData.programId
      })
    })
      .then(res => res.json())
      .then(data => {
        onEnroll && onEnroll(data);
        alert("Client enrolled successfully!");
        setFormData({ clientId: "", programId: "" });
      })
      .catch(err => console.error("Error enrolling client:", err));
  }


  return (
    <form  className="enrollment-form">
      <h3>Enroll Client to Program</h3>

      </form>
  );
}

export default EnrollForm;
