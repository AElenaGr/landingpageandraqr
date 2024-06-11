// src/components/header.js

import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'
import "./layout.css" // Asegúrate de que tu CSS esté importado

const Header = () => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
      backgroundColor: `white`, // Banda blanca
      width: `100%`, // Asegura que el header ocupe todo el ancho
      borderBottom: `1px solid #ddd`, // Línea inferior sutil para separar
    }}
  >
    <Link to="/" style={{ display: `flex`, alignItems: `center` }}>
      <StaticImage
        src="../images/pn.png"
        loading="eager"
        width={90} // Ajusta el tamaño según sea necesario
        quality={95}
        formats={['auto', 'webp', 'avif']}
        alt="Logo PN"
        style={{ marginRight: `var(--space-3)` }} // Espacio entre logo y título
      />
    </Link>
    <nav style={{ display: 'flex', alignItems: 'center' }}>
      <Link to="/crear-qr" style={{ margin: '0 1rem', textDecoration: 'none', color: 'black' }}>Crear QR</Link>
      <span style={{ margin: '0 0.5rem' }}>|</span>
      <Link to="/page-2" style={{ margin: '0 1rem', textDecoration: 'none', color: 'black' }}>Generador de QR</Link>
      <span style={{ margin: '0 0.5rem' }}>|</span>
      <Link to="/page-3" style={{ margin: '0 1rem', textDecoration: 'none', color: 'black' }}>Información Institucional</Link>
    </nav>
  </header>
)

export default Header
