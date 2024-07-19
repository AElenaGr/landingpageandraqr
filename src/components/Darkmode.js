import React from "react"
import styled from "styled-components"
// Definición del contenedor con estilos condicionales
const ContainerDarkMode = styled.div`
  background-color: ${props => (props.dark ? "#333" : "#fff")};
  color: ${props => (props.dark ? "#fff" : "#000")};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, color 0.3s ease;
`
const Darkmode = ({ dark, children }) => (
  <ContainerDarkMode dark={dark}>{children}</ContainerDarkMode>
)
export default Darkmode
