import React, { useState, useEffect } from "react";
import { BASE_URL } from "../api";

function EnrollForm({ onEnroll }) {
  const [clients, setClients] = useState([]);
  const [programs, setPrograms] = useState([]);
  const [formData, setFormData] = useState({
    clientId: "",
    programId: ""
  });



  return (
    <form  className="enrollment-form">
      <h3>Enroll Client to Program</h3>

      </form>
  );
}

export default EnrollForm;
