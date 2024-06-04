import * as React from "react";
import { Link } from "gatsby";
import "./layout.css"; // Asegúrate de que tu CSS esté importado
import { StaticImage } from 'gatsby-plugin-image';

const Header = ({ siteTitle }) => (
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
      <h1 style={{ margin: 0 }}>{}</h1> {/* Añadir el título del sitio si es necesario */}
    </Link>
  </header>
);

export default Header;
