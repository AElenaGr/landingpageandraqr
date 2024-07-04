import React, { useState, useEffect } from "react";
import CerrarSesion from "../components/cerrar-sesion";
import Layout from "../components/layout";

const Profile = () => {
  const [tandemNombre, setTandemNombre] = useState('');
  const [tandemEmail, setTandemEmail] = useState('');
  const [tandemId, setTandemId] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Accede a localStorage solo en el entorno del navegador
      setTandemNombre(localStorage.getItem('tandem_nombre') || '');
      setTandemEmail(localStorage.getItem('tandem_email') || '');
      setTandemId(localStorage.getItem('tandem_id') || '');
    }
  }, []);

  return (
    <>
      <Layout>
        <div className="qr-contenido">
          <p>Nombre: {tandemNombre}</p>
          <p>Email: {tandemEmail}</p>
          <p>Id: {tandemId}</p>
        </div>
        <a href="/contrasenia" role="button" className="aform">Cambiar contraseña</a>
        <br></br>
        <CerrarSesion />
      </Layout>
    </>
  );
}

export default Profile;
