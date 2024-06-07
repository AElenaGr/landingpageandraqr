import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de importar los estilos de Bootstrap
import './layout.css'; // Importa el archivo CSS correctamente

function CollapseContacto(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <React.StrictMode>
      <Button 
        onClick={toggle} 
        className="more-info-button" // Aplica la clase CSS personalizada
      >
        Más info
      </Button>
      <Collapse isOpen={isOpen} {...args}>
        <Card className="text-container">
          <CardBody className="card-body-custom">
            Esta web ofrece la funcionalidad de crear códigos QR personalizados para los empleados de Patrimonio Nacional. Los códigos QR pueden contener información útil, como nombres, números de identificación o detalles de contacto. Esta herramienta facilita la gestión de la información del personal y puede ser útil en diversas situaciones laborales.
          </CardBody>
        </Card>
      </Collapse>
    </React.StrictMode>
  );
}

export default CollapseContacto;
