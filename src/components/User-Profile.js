// src/pages/user-profile.js

import * as React from 'react';
import Layout from './layout';
import Seo from './seo';
import icon from '../images/woman.png'; // Importa el icono

const UserProfile = ({ user }) => {
  // Manejar el caso donde user es undefined o null (aunque idealmente este componente se usaría solo si user está definido)

  return (
    <Layout>
      <Seo title="Perfil de Usuario" />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* División para el icono */}
        <div style={{ marginRight: '20px' }}>
          <img src={icon} alt="Icono de Usuario" style={{ width: '100px', height: '100px' }} />
        </div>
        {/* División para la información del usuario */}
        <div>
          <h1>Bienvenido, {user.name}!</h1>
          <p>Email: {user.email}</p>
          {/* Aquí puedes agregar más detalles del usuario según lo que necesites */}
          <p>Departamento: {user.department}</p>
          {/* Suponiendo que user.qr contiene el enlace al QR generado */}
          {user.qr && (
            <div>
              <img src={user.qr} alt="QR del Usuario" style={{ width: '150px', height: '150px' }} />
              {/* Si quieres agregar algún texto descriptivo para el QR */}
              <p>QR Guardado</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default UserProfile;
