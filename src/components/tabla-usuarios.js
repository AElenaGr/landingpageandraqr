import React, { useEffect, useState } from 'react';
import './css/TablaUsuarios.css'; // Archivo CSS para estilos de la tabla
import UpdateUser from './UpdateUser';
import defaultAvatar from '../images/user.png'; // Importa la imagen predeterminada

function TablaUsuarios({ url }) {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState('');
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setUsers(data.users);
        setMessage(data.message);
      } catch (error) {
        console.error('Error al buscar la lista de usuarios', error);
      }
    };
    fetchUsers();
  }, [url]);

  const handleEditUser = (user) => {
    setEditingUser(user);
  };

  const handleCloseModal = () => {
    setEditingUser(null);
  };

  const handleUpdateUser = async (email, updatedData) => {
    try {
      const response = await fetch(`http://localhost/api-qr-tandem/v1/update-user.php`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, ...updatedData })
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data; // Devolver la respuesta del backend para manejarla en UpdateUser.js
    } catch (error) {
      console.error('Error al actualizar los datos del usuario', error);
      return { success: false, message: 'Error al actualizar los datos del usuario' };
    }
  };

  return (
    <div className="usuarios-grid">
      {users.map(user => (
        <div key={user.id} className="usuario-card">
          <img
            src={user.imagen || defaultAvatar}
            alt={`${user.nombre}`}
            className="usuario-imagen"
          />
          <p>ID: {user.id}</p>
          <p>Nombre: {user.nombre}</p>
          <p>Email: {user.email}</p>
          <p>Delegación: {user.delegacion}</p>
          <p>Rol: {user.role}</p>
          <button onClick={() => handleEditUser(user)}>Editar Usuario</button>
        </div>
      ))}
      {editingUser && (
        <div className="modal">
          <UpdateUser user={editingUser} onClose={handleCloseModal} onUpdate={handleUpdateUser} />
        </div>
      )}
    </div>
  );
}

export default TablaUsuarios;
