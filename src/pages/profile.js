import React, { useState, useEffect } from "react";
import CerrarSesion from "../components/cerrar-sesion";
import Layout from "../components/layout";
import userImage from "../images/user.png"; // Asegúrate de que la ruta sea correcta
import './usuario.css'; // Asegúrate de que la ruta sea correcta

const Profile = () => {
  const [tandemNombre, setTandemNombre] = useState('');
  const [tandemEmail, setTandemEmail] = useState('');
  const [tandemId, setTandemId] = useState('');
  const [tandemFoto, setTandemFoto] = useState(userImage); // Default to user.png
  const [tandemDelegacion, setTandemDelegacion] = useState(''); // Estado para la delegación
  const [tandemContrasena, setTandemContrasena] = useState(''); // Estado para la contraseña

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Accede a localStorage solo en el entorno del navegador
      setTandemNombre(localStorage.getItem('tandem_nombre') || '');
      setTandemEmail(localStorage.getItem('tandem_email') || '');
      setTandemId(localStorage.getItem('tandem_id') || '');
      setTandemDelegacion(localStorage.getItem('tandem_delegacion') || ''); // Obtener delegación
      setTandemContrasena(localStorage.getItem('tandem_contrasena') || ''); // Obtener contraseña
      const foto = localStorage.getItem('tandem_foto');
      if (foto) {
        setTandemFoto(foto);
      }
    }
  }, []);

  return (
    <Layout>
      <div className="profile-container">
        <div className="profile-card">
          <img src={tandemFoto} alt="Foto de perfil" className="profile-image" />
          <div className="profile-info">
            <div className="profile-item">
              <span className="profile-label">Nombre:</span>
              <span className="profile-data">{tandemNombre}</span>
            </div>
            <div className="profile-item">
              <span className="profile-label">Email:</span>
              <span className="profile-data">{tandemEmail}</span>
            </div>
            <div className="profile-item">
              <span className="profile-label">Id:</span>
              <span className="profile-data">{tandemId}</span>
            </div>
            <div className="profile-item">
              <span className="profile-label">Delegación:</span>
              <span className="profile-data">{tandemDelegacion}</span>
            </div>
            <div className="profile-item">
              <span className="profile-label">Contraseña:</span>
              <span className="profile-data">{tandemContrasena}</span>
            </div>
            <div className="profile-item">
              <a href="/contrasenia" role="button" className="aform">Cambiar contraseña</a>
            </div>
            <CerrarSesion />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Profile;
