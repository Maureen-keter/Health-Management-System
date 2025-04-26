import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../api';
import { Button, Form, Card } from 'react-bootstrap'; // React Bootstrap
import TextField from '@mui/material/TextField'; // Material-UI
import '../styles/ProgramItem.css';

function ProgramItem({ program, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: ''
  });

  useEffect(() => {
    if (program) {
      setFormData({
        name: program.name,
        description: program.description
      });
    }
  }, [program]);

  const { name, description } = formData;

  function handleChange(e) {
    const { name, value } = e.target;
    console.log('Changing field:', name, 'to', value); // <-- Added
    if (!name) return; // extra safety
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitting form with data:", formData); // <-- Added
    console.log("Program ID is:", program.id); // <-- Added

    fetch(`${BASE_URL}/program/${program.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to update program");
        }
        return res.json();
      })
      .then((updatedProgram) => {
        console.log("Successfully updated program:", updatedProgram); // <-- Added
        onEdit(updatedProgram);
        setIsEditing(false);
      })
      .catch((err) => console.error("Error updating program:", err));
  }

  function handleDeleteClick() {
    console.log("Deleting program with ID:", program.id); // <-- Added
    fetch(`${BASE_URL}/programs/${program.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        console.log("Program deleted successfully."); // <-- Added
        onDelete(program);
      })
      .catch((err) => console.error("Error deleting program:", err));
  }

  return (
    <Card className="program-item mb-3">
      <Card.Body>
        {isEditing ? (
          <Form onSubmit={handleSubmit}>
            <TextField
              label="Program Name"
              name="name"
              value={name}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Program Description"
              name="description"
              value={description}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
              multiline
              rows={3}
            />
            <div className="d-flex gap-2 mt-3">
              <Button variant="success" type="submit">Save</Button>
              <Button variant="secondary" onClick={() => setIsEditing(false)}>Cancel</Button>
            </div>
          </Form>
        ) : (
          <div>
            <h5 className="program-name">{program.name}</h5>
            <p className="program-description">{program.description}</p>
            <div className="d-flex gap-2">
              <Button onClick={() => setIsEditing(true)}>Edit</Button>
              <Button onClick={handleDeleteClick}>Delete</Button>
            </div>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProgramItem;
