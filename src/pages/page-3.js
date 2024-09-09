import React from 'react';
import Layout from '../components/layout';
import '../components/css/layout.css';
import TandemButton from '../components/button';
import { StaticImage } from 'gatsby-plugin-image';

const Info = () => {
  return (
    <Layout>
      <div className="infoinst">
        <div className="imagecontainer">
          {/* Aquí puedes agregar cualquier imagen si lo deseas */}
        </div>
        <h1>SOBRE PATRIMONIO NACIONAL: CONOCE NUESTRA HISTORIA</h1>
        <p className="wide-text">
          Para conocer más sobre Patrimonio Nacional, haz clic en el enlace a continuación:
        </p>
        {/* Enlace a la página externa */}
        <a href="https://master--sobrepn.netlify.app/" target="_blank" rel="noopener noreferrer" className='button'>
          Ir a Patrimonio Nacional
        </a>
      </div>
      <a href="/" role='button' className='button'>Volver a inicio</a>
    </Layout>
  );
};

export default Info;
