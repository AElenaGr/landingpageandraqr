import React from "react";
import Layout from '../components/layout';
import '../components/layout.css';

const ContactDetails = () => {
  return (
    <Layout>
      <div className="container">
        <div className="contact-details">
          <h2>Contacto de Patrimonio Nacional</h2>
          <p>Dirección: Calle de la Reina, 1, 28001 Madrid, España</p>
          <p>Teléfono: +34 91 454 88 00</p>
          <p>Email: info@patrimonionacional.es</p>
        </div>
      </div>
    </Layout>
  );
}

export default ContactDetails;
