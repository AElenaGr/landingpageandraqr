import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import logoutIcon from '../images/logout-icon.png';

const Header = () => {
  const [tandemNombre, setTandemNombre] = useState('');
  const [tandemRole, setTandemRole] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const nombre = localStorage.getItem('tandem_nombre');
      const role = localStorage.getItem('tandem_role'); // Asume que el rol está almacenado en localStorage
      setTandemNombre(nombre);
      setTandemRole(role);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('tandem_nombre');
    localStorage.removeItem('tandem_role'); // Asegúrate de eliminar el rol al cerrar sesión
    window.location.replace('/');
  };

  return (
    <header
      style={{
        margin: '0 auto',
        padding: 'var(--space-4) var(--size-gutter)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        width: '100%',
        borderBottom: '1px solid #ddd',
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
        <Link to="/formulario" style={{ margin: '0 1rem', textDecoration: 'none', color: 'black' }}>
          Acceso Empleados
        </Link>
        {tandemNombre && (
          <>
            <span style={{ margin: '0 0.5rem' }}>|</span>
            <Link to="/page-2" style={{ margin: '0 1rem', textDecoration: 'none', color: 'black' }}>
              Generador de QR
            </Link>
            <span style={{ margin: '0 0.5rem' }}>|</span>
            <Link to="/profile" style={{ margin: '0 1rem', textDecoration: 'none', color: 'black' }}>
              Perfil
            </Link>
            <span style={{ margin: '0 0.5rem' }}>|</span>
            <Link to="/page-3" style={{ margin: '0 1rem', textDecoration: 'none', color: 'black' }}>
              Información Institucional
            </Link>
            <span style={{ margin: '0 0.5rem' }}>|</span>
            <Link to="/p-soporte" style={{ margin: '0 1rem', textDecoration: 'none', color: 'black' }}>
              Soporte Técnico
            </Link>
            <span style={{ margin: '0 0.5rem' }}>|</span>
            <Link to="/list-qr" style={{ margin: '0 1rem', textDecoration: 'none', color: 'black' }}>
              Lista QR
            </Link>
            {tandemRole === 'admin' && (
              <>
                <span style={{ margin: '0 0.5rem' }}>|</span>
                <Link to="/admin-user" style={{ margin: '0 1rem', textDecoration: 'none', color: 'black' }}>
                  Admin User
                </Link>
              </>
            )}
          </>
        )}
      </nav>

      {tandemNombre ? (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <p style={{ marginRight: '1rem' }}>
            ¡Bienvenido, {tandemNombre}!
          </p>
          <button
            onClick={handleLogout}
            style={{ border: 'none', background: 'none', cursor: 'pointer' }}
          >
            <img
              src={logoutIcon}
              alt="Logout"
              style={{ width: '24px', height: '24px' }}
            />
          </button>
        </div>
      ) : (
        <Link
          to="/formulario"
          style={{ marginLeft: 'auto', textDecoration: 'none', color: 'black' }}
        >
          Iniciar Sesión
        </Link>
      )}
    </header>
  );
};

export default Header;
