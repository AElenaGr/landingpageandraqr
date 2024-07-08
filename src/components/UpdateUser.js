import React, { useState } from 'react';

const UpdateUser = ({ user, onClose, onUpdate }) => {
  const [nombre, setNombre] = useState(user.nombre);
  const [password, setPassword] = useState('');
  const [delegacion, setDelegacion] = useState(user.delegacion);
  const [role, setRole] = useState(user.role);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedData = { nombre, password, delegacion, role };
    const response = await onUpdate(user.email, updatedData);
    if (response.success) {
      setMessage('Datos actualizados correctamente');
      onClose(); // Cerrar el modal después de actualizar los datos
    } else {
      setMessage(response.message || 'Error al actualizar los datos del usuario');
    }
  };

  return (
    <div className="modal-content">
      <h2>Actualizar Datos de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Nombre:
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
          </label>
        </div>
        <div>
          <label>
            Contraseña:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Delegación:
            <input type="text" value={delegacion} onChange={(e) => setDelegacion(e.target.value)} required />
          </label>
        </div>
        <div>
          <label>
            Rol:
            <select value={role} onChange={(e) => setRole(e.target.value)} required>
              <option value="admin">Admin</option>
              <option value="employee">Employee</option>
              <option value="guest">Guest</option>
            </select>
          </label>
        </div>
        <button type="submit">Actualizar Datos</button>
        {message && <p>{message}</p>}
      </form>
      <button onClick={onClose}>Cerrar</button>
    </div>
  );
};

export default UpdateUser;
