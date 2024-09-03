import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Soporte from "../components/Soporte";
import CardStylo from "../components/CardStylo";  // Import CardStylo component
import '../components/css/cardStylo.css'; // Import CSS for SoportePage

const SoportePage = () => (
  <Layout>
    <Seo title="Soporte Técnico" />
    <div className="layout">
      <h1 className="titulo">
        Soporte Técnico
      </h1>
      <div className="content">
        <Soporte />
        {/* <CardStylo
          titulo="Mi tarjeta Genial"
          descripcion="Esto es el contenido de la tarjeta"
          url="https://upload.wikimedia.org/wikipedia/commons/4/49/Palacio_Real_de_Aranjuez_%285%29.jpg"
        />
        <CardStylo
          titulo="Mi tarjeta Genial"
          descripcion="Esto es el contenido de la tarjeta"
          url="https://upload.wikimedia.org/wikipedia/commons/4/49/Palacio_Real_de_Aranjuez_%285%29.jpg"
        /> */}
      </div>
    </div>
  </Layout>
);

export default SoportePage;
