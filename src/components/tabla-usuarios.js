import React, { useEffect, useState } from 'react';
import './css/TablaUsuarios.css'; // Archivo CSS para estilos de la tabla
import UpdateUser from './UpdateUser';
import defaultAvatar from '../images/user.png'; // Importa la imagen predeterminada
import { Refresh } from '@mui/icons-material';
import EditarRole from './editarRole';

function TablaUsuarios({ url }) {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState('');
  const [editingUser, setEditingUser] = useState(null);
  const [refresh, setRefresh] = useState(false);

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
        setRefresh(true)
        handleUserUpdated();
      } catch (error) {
        console.error('Error al buscar la lista de usuarios', error);
      }
    };
    fetchUsers();
  }, [url, refresh]);

  const handleEditUser = (user) => {
    setEditingUser(user);
  };

  const handleUserUpdated = () => {
    setRefresh(!refresh); // Cambia el estado de refresh para desencadenar useEffect
  };

  const handleCloseModal = () => {
    setEditingUser(null);
  };



  const handleUpdateUser = async (email, updatedData) => {
    try {
      const response = await fetch(`https://andra.tandempatrimonionacional.eu/api-qr-tandem/v1/update-user.php`, {
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

  const handleDeleteUser = async (email) => {
    try {
      const response = await fetch(`https://andra.tandempatrimonionacional.eu/api-qr-tandem/v1/delete-user.php`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (data.success) {
        setUsers(users.filter(user => user.email !== email)); // Eliminar usuario del estado local
      }
      return data;
    } catch (error) {
      console.error('Error al eliminar el usuario', error);
      return { success: false, message: 'Error al eliminar el usuario' };
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
          <button onClick={() => handleDeleteUser(user.email)} onUserUpdated={handleUserUpdated}>Eliminar Usuario</button>
          <EditarRole emaill={user.email} rolee={user.role} onUserUpdated={handleUserUpdated} />
        </div>
      ))}
      {editingUser && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-modal" onClick={handleCloseModal}>X</button>
            <UpdateUser user={editingUser} onClose={handleCloseModal} onUpdate={handleUpdateUser} />
          </div>
        </div>
      )}
    </div>
  );
}

export default TablaUsuarios;
