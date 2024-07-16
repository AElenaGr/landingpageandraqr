import React from 'react';
import styled from 'styled-components';
import '../components/css/cardStylo.css';  // Asegúrate de que la ruta sea correcta

const CardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  max-width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;
const CardTitle = styled.h2`
  margin: 0 0 8px 0;
  font-size: 1.5em;
`;
const CardDescription = styled.div`
  margin: 0 0 16px 0;
  font-size: 1em;
  color: #666;
`;
const Button = styled.button`
  background-color:#2a4a80;;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 1em;
  &:hover {
    background-color: #0056B3;
  }
  &.especial {
    background-color: red;
  }
`;
const CardImg = styled.img`
  max-width: 100%;
`;
const CardStylo = ({ titulo, descripcion, url }) => {
  return (
    <>
      <CardContainer>
        <CardTitle>{titulo}</CardTitle>
        <CardDescription>
          <CardImg src={url} alt={titulo} />
          {descripcion}
        </CardDescription>
        <Button>descargar </Button>
        <Button className='especial'>Guardar DB </Button>
      </CardContainer>
    </>
  );
};
export default CardStylo;
