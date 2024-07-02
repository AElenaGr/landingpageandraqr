import * as React from "react"
import icon from "../images/woman.png" // Importa el icono

const UserProfile = ({ user }) => {
  // Manejar el caso donde user es undefined o null
  if (!user) {
    return (
      <div>
        <h1>Error: Usuario no encontrado</h1>
        <p>No se pudo cargar la información del usuario.</p>
      </div>
    )
  }

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {/* División para el icono */}
      <div style={{ marginRight: "20px" }}>
        <img
          src={icon}
          alt="Icono de Usuario"
          style={{ width: "100px", height: "100px" }}
        />
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
            <img
              src={user.qr}
              alt="QR del Usuario"
              style={{ width: "150px", height: "150px" }}
            />
            {/* Si quieres agregar algún texto descriptivo para el QR */}
            <p>QR Guardado</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default UserProfile
