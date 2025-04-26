import React from "react";

function ClientProfile({ client }) {
  return (
    <div className="client-profile">
      <h3>Client Profile</h3>
      <p><strong>Name:</strong> {client.name}</p>
      <p><strong>Email:</strong> {client.email}</p>
      <p><strong>Contact:</strong> {client.contact}</p>

      <h4>Enrolled Programs</h4>
      {client.enrollments && client.enrollments.length > 0 ? (
        <ul>
          {client.enrollments.map((enrollment) => (
            <li key={enrollment.id}>
              <strong>{enrollment.name}</strong>: {enrollment.description}
            </li>
          ))}
        </ul>
      ) : (
        <p>No programs enrolled.</p>
      )}
    </div>
  );
}

export default ClientProfile;
