import * as React from "react"
import { Link } from "gatsby"
import './EmployeeLoginForm.css';
import Layout from "../components/layout"
import Seo from "../components/seo"

const EmployeeLoginForm = () => {
  return (
    <Layout>
      <div className="login-form-container">
        <form className="login-form">
          <h2>Acceso de Empleados</h2>
          <label htmlFor="username">Usuario:</label>
          <input type="text" id="username" name="username" required />
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" name="password" required />
          <button type="submit">Ingresar</button>
        </form>
      </div>
    </Layout>
  );
};

export default EmployeeLoginForm;

export const Head = () => <Seo title="Acceso de Empleados" />
