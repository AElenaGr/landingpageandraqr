import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import logoutIcon from "../images/logout-icon.png"
import "./css/header.css"

const Header = () => {
  const [tandemNombre, setTandemNombre] = useState("")
  const [tandemRole, setTandemRole] = useState("")
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const nombre = localStorage.getItem("tandem_nombre")
      const role = localStorage.getItem("tandem_role")
      const darkMode = localStorage.getItem("dark_mode") === "true"
      setTandemNombre(nombre)
      setTandemRole(role)
      setIsDarkMode(darkMode)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("tandem_nombre")
    localStorage.removeItem("tandem_role")
    window.location.replace("/")
  }

  const toggleDarkMode = () => {
    const newMode = !isDarkMode
    setIsDarkMode(newMode)
    localStorage.setItem("dark_mode", newMode)
  }

  return (
    <header className={`header ${isDarkMode ? "dark-mode" : ""}`}>
      <Link to="/" className="logo-link">
        <StaticImage
          src="../images/pn.png"
          loading="eager"
          width={90}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="Logo PN"
          className="logo"
        />
      </Link>

      <nav className="nav">
        <div className="nav-item">
          <Link to="/formulario">Acceso Empleados</Link>
        </div>
        {tandemNombre && (
          <>
            <div className="nav-item">
              <Link to="/page-2">Generador de QR</Link>
            </div>
            <div className="nav-item">
              <Link to="/profile">Perfil</Link>
            </div>
            
            <div className="nav-item">
              <Link to="/p-soporte">Soporte Técnico</Link>
            </div>
            <div className="nav-item">
              <Link to="/list-qr">Lista QR</Link>
            </div>
            {tandemRole === "admin" && (
              <div className="nav-item">
                <Link to="/admin-user">Admin User</Link>
              </div>
            )}
          </>
        )}
      </nav>

      <div className="right-section">
        <button onClick={toggleDarkMode} className="dark-mode-toggle">
          {isDarkMode ? "🌞" : "🌜"}
        </button>

        <div className="user-section">
          {tandemNombre ? (
            <>
              <p>¡Bienvenido, {tandemNombre}!</p>
              <button onClick={handleLogout} className="logout-button">
                <img src={logoutIcon} alt="Logout" className="logout-icon" />
              </button>
            </>
          ) : (
            <Link to="/formulario" className="login-link">
              Iniciar Sesión
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
