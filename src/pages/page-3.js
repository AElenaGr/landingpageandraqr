// src/components/InstitutionalInfo.js

import React from "react";
import Footer from "../components/footer";
import Layout from "../components/layout";

const InstitutionalInfo = () => {
  return (
    <Layout>
    <div className="institutional-info">
      <h2>Información Institucional de Patrimonio Nacional</h2>
      <p>
        Patrimonio Nacional es una institución española que gestiona y conserva
        un valioso conjunto de bienes culturales, históricos y naturales. Su
        misión principal es poner en valor y preservar el patrimonio histórico
        y artístico vinculado a la historia de España, incluyendo palacios,
        monasterios, jardines y otros sitios históricos.
      </p>
      <p>
        Entre sus funciones destacan la gestión de los Reales Sitios, la
        conservación y restauración de sus bienes culturales, y la promoción de
        su conocimiento y disfrute por parte del público. Patrimonio Nacional
        juega un papel fundamental en la preservación de la memoria histórica y
        cultural de España.
      </p>
      <p>
        Para más información, puedes visitar el sitio web oficial de{" "}
        <a href="https://www.patrimonionacional.es/">
          Patrimonio Nacional
        </a>.
      </p>
    </div>
    
    </Layout>
  );
};

export default InstitutionalInfo;
