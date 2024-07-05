import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

// Importa el ícono de logout
import logoutIcon from "../images/logout-icon.png"

const Header = () => {
  const [tandemNombre, setTandemNombre] = React.useState('')
  const [role, setRole] = React.useState('')

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      // Accede a localStorage solo en el entorno del navegador
      const nombre = localStorage.getItem('tandem_nombre');
      const storedRole = localStorage.getItem('tandem_role');
      setTandemNombre(nombre);
      setRole(storedRole);
    }
  }, [])

  // Función para manejar el logout
  const handleLogout = () => {
    // Elimina el usuario del almacenamiento local
    localStorage.removeItem("tandem_nombre");
    localStorage.removeItem("tandem_role");
    // Redirige a la página de inicio
    window.location.replace("/");
  };

  return (
    <header
      style={{
        margin: `0 auto`,
        padding: `var(--space-4) var(--size-gutter)`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `space-between`,
        backgroundColor: `white`,
        width: `100%`,
        borderBottom: `1px solid #ddd`,
      }}
    >
      <Link to="/" style={{ display: `flex`, alignItems: `center` }}>
        <StaticImage
          src="../images/pn.png"
          loading="eager"
          width={90}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="Logo PN"
          style={{ marginRight: `var(--space-3)` }}
        />
      </Link>

      <nav style={{ display: "flex", alignItems: "center" }}>
        <Link
          to="/"
          style={{ margin: "0 1rem", textDecoration: "none", color: "black" }}
        >
          Inicio
        </Link>
        <span style={{ margin: "0 0.5rem" }}>|</span>
        <Link
          to="/formulario"
          style={{ margin: "0 1rem", textDecoration: "none", color: "black" }}
        >
          Acceso Empleados
        </Link>
        {role === 'admin' && (
          <>
            <span style={{ margin: "0 0.5rem" }}>|</span>
            <Link
              to="http://localhost:8000/admin-user/"
              style={{
                margin: "0 1rem",
                textDecoration: "none",
                color: "black",
              }}
            >
              Ver Usuarios
            </Link>
          </>
        )}
        {tandemNombre && (
          <>
            <span style={{ margin: "0 0.5rem" }}>|</span>
            <Link
              to="/page-2"
              style={{
                margin: "0 1rem",
                textDecoration: "none",
                color: "black",
              }}
            >
              Generador de QR
            </Link>
            <span style={{ margin: "0 0.5rem" }}>|</span>
            <Link
              to="/profile"
              style={{
                margin: "0 1rem",
                textDecoration: "none",
                color: "black",
              }}
            >
              Perfil
            </Link>
            <span style={{ margin: "0 0.5rem" }}>|</span>
            <Link
              to="/page-3"
              style={{
                margin: "0 1rem",
                textDecoration: "none",
                color: "black",
              }}
            >
              Información Institucional
            </Link>
          </>
        )}
      </nav>

      {tandemNombre ? (
        <div style={{ display: "flex", alignItems: "center" }}>
          <p style={{ marginRight: "1rem" }}>
            ¡Bienvenido, {tandemNombre}!
          </p>
          <button
            onClick={handleLogout}
            style={{ border: "none", background: "none", cursor: "pointer" }}
          >
            <img
              src={logoutIcon}
              alt="Logout"
              style={{ width: "24px", height: "24px" }}
            />
          </button>
        </div>
      ) : (
        <Link
          to="/formulario"
          style={{ marginLeft: "auto", textDecoration: "none", color: "black" }}
        >
          Iniciar Sesión
        </Link>
      )}
    </header>
  )
}

export default Header
