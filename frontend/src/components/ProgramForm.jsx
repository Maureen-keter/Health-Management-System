import React, { useState } from "react";
import { BASE_URL } from "../api";
import { Form, Button, Row, Col } from "react-bootstrap";

function ProgramForm({ onAddProgram }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const programData = {
      name,
      description,
    };
    fetch(`${BASE_URL}/programs`, {
      method: "POST",
      headers: {
        'Content-Type': "application/json",
      },
      body: JSON.stringify(programData),
    })
      .then((res) => res.json())
      .then((newProgram) => onAddProgram(newProgram));

    setName("");
    setDescription("");
  }

  return (
    <Form onSubmit={handleSubmit} className="p-4 shadow-sm rounded bg-light">
      <h4 className="mb-4 text-center">Create a New Program</h4>

      <Form.Group as={Row} className="mb-3" controlId="programName">
        <Form.Label column sm="2">
          Name
        </Form.Label>
        <Col sm="10">
          <Form.Control
            type="text"
            placeholder="Enter program name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="programDescription">
        <Form.Label column sm="2">
          Description
        </Form.Label>
        <Col sm="10">
          <Form.Control
            as="textarea"
            placeholder="Enter program description"
            rows={2}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Col>
      </Form.Group>

      <Button variant="primary" type="submit" className="w-100">
        Add Program
      </Button>
    </Form>
  );
}

export default ProgramForm;
