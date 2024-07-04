import React from "react"
import CerrarSesion from "../components/cerrar-sesion"
import Layout from "../components/layout"


const Profile = () => {
  return (
    <>
      <Layout>
        <div className="qr-contenido">
      <p>Nombre: {localStorage.getItem('tandem_nombre')}</p>
      <p>Email: {localStorage.getItem('tandem_email')}</p>
      <p>Id: {localStorage.getItem('tandem_id')}</p>
      </div>
      <a href="/contrasenia" role='button' className='aform'>Cambiar contraseña</a>
      <br></br>
      <CerrarSesion></CerrarSesion>
        
      </Layout>
    </>
  )
}
export default Profile