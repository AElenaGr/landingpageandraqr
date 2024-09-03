import React, { useState } from 'react';

const EditarRole = ({emaill, rolee, onUserUpdated}) => {
  const [email, setEmail] = useState(emaill);
  const [role, setRole] = useState(rolee);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('https://cristina.tandempatrimonionacional.eu/api-qr-tandem/v1/change-role.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, role }),
    });

    const data = await response.json();
    setMessage(data.message);
    onUserUpdated();
  };

  return (
    <div>
      <h2>Actualizar Rol de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <p>{email}</p>
        </div>
        <div>
          <label>
            Role:
            <select id="roleSelect" value={role} onChange={(e) => setRole(e.target.value)} required>
            <option value="admin">Admin</option>
            <option value="employee">Employee</option>
            <option value="guest">Guest</option>
            </select>
          </label>
        </div>
        <button type="submit">Actualizar Rol</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default EditarRole;