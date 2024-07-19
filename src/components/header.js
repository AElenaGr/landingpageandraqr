import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import logoutIcon from '../images/logout-icon.png';

const Header = () => {
  const [tandemNombre, setTandemNombre] = useState('');
  const [tandemRole, setTandemRole] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const nombre = localStorage.getItem('tandem_nombre');
      const role = localStorage.getItem('tandem_role');
      const darkMode = localStorage.getItem('dark_mode') === 'true';
      setTandemNombre(nombre);
      setTandemRole(role);
      setIsDarkMode(darkMode);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('tandem_nombre');
    localStorage.removeItem('tandem_role');
    window.location.replace('/');
  };

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('dark_mode', newMode);
  };

  return (
    <header
      style={{
        margin: '0 auto',
        padding: 'var(--space-4) var(--size-gutter)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: isDarkMode ? '#333' : 'white',
        color: isDarkMode ? 'white' : 'black',
        width: '100%',
        borderBottom: `1px solid ${isDarkMode ? '#555' : '#ddd'}`,
      }}
    >
      <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <StaticImage
          src="../images/pn.png"
          loading="eager"
          width={90}
          quality={95}
          formats={['auto', 'webp', 'avif']}
          alt="Logo PN"
          style={{ marginRight: 'var(--space-3)' }}
        />
      </Link>

      <nav style={{ display: 'flex', alignItems: 'center' }}>
        <Link to="/formulario" style={{ margin: '0 1rem', textDecoration: 'none', color: isDarkMode ? 'white' : 'black' }}>
          Acceso Empleados
        </Link>
        {tandemNombre && (
          <>
            <span style={{ margin: '0 0.5rem' }}>|</span>
            <Link to="/page-2" style={{ margin: '0 1rem', textDecoration: 'none', color: isDarkMode ? 'white' : 'black' }}>
              Generador de QR
            </Link>
            <span style={{ margin: '0 0.5rem' }}>|</span>
            <Link to="/profile" style={{ margin: '0 1rem', textDecoration: 'none', color: isDarkMode ? 'white' : 'black' }}>
              Perfil
            </Link>
            <span style={{ margin: '0 0.5rem' }}>|</span>
            <Link to="/page-3" style={{ margin: '0 1rem', textDecoration: 'none', color: isDarkMode ? 'white' : 'black' }}>
              Información Institucional
            </Link>
            <span style={{ margin: '0 0.5rem' }}>|</span>
            <Link to="/p-soporte" style={{ margin: '0 1rem', textDecoration: 'none', color: isDarkMode ? 'white' : 'black' }}>
              Soporte Técnico
            </Link>
            <span style={{ margin: '0 0.5rem' }}>|</span>
            <Link to="/list-qr" style={{ margin: '0 1rem', textDecoration: 'none', color: isDarkMode ? 'white' : 'black' }}>
              Lista QR
            </Link>
            {tandemRole === 'admin' && (
              <>
                <span style={{ margin: '0 0.5rem' }}>|</span>
                <Link to="/admin-user" style={{ margin: '0 1rem', textDecoration: 'none', color: isDarkMode ? 'white' : 'black' }}>
                  Admin User
                </Link>
              </>
            )}
          </>
        )}
      </nav>

      {/* boton oscuro claro */}
      <button
          onClick={toggleDarkMode}
          style={{
            border: 'none',
            background: 'none',
            cursor: 'pointer',
            color: isDarkMode ? 'white' : 'black'
          }}
        >
          {isDarkMode ? '🌞' : '🌜'}
        </button>

      
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {tandemNombre ? (
          <>
            <p style={{ marginRight: '1rem' }}>
              ¡Bienvenido, {tandemNombre}!
            </p>
            <button
              onClick={handleLogout}
              style={{ border: 'none', background: 'none', cursor: 'pointer', marginRight: '1rem' }}
            >
              <img
                src={logoutIcon}
                alt="Logout"
                style={{ width: '24px', height: '24px' }}
              />
            </button>
          </>
        ) : (
          <Link
            to="/formulario"
            style={{ marginLeft: 'auto', textDecoration: 'none', color: isDarkMode ? 'white' : 'black' }}
          >
            Iniciar Sesión
          </Link>
        )}
        
      </div>
    </header>
  );
};

export default Header;
