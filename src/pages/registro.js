import React, { useState } from "react";
import "./EmployeeLoginForm.css";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";

const Register = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [delegacion, setDelegacion] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (email !== confirmEmail) {
      alert("Los correos electrónicos no coinciden");
      return;
    }

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    try {
      const response = await fetch("http://tu-dominio/endpoints/register.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre,
          email,
          password,
          delegacion,
        }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error registrando usuario", error);
    }
  };

  return (
    <Layout>
      <div className="login-form-container">
        <form className="login-form" onSubmit={handleRegister}>
          <StaticImage
            src="../images/Logo_de_Patrimonio_Nacional.svg.png"
            loading="eager"
            width={250}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ marginBottom: `var(--space-3)` }}
          />
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            placeholder="Nombre"
            id="name"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            placeholder="Email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="confirmEmail">Repetir Email:</label>
          <input
            type="email"
            placeholder="Confirmar Email"
            id="confirmEmail"
            value={confirmEmail}
            onChange={(e) => setConfirmEmail(e.target.value)}
          />

          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            placeholder="Contraseña"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label htmlFor="confirmPassword">Vuelve a escribir la contraseña:</label>
          <input
            type="password"
            placeholder="Confirmar Contraseña"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <label htmlFor="delegacion">Delegación de Patrimonio Nacional:</label>
          <input
            type="text"
            placeholder="Delegación"
            id="delegacion"
            value={delegacion}
            onChange={(e) => setDelegacion(e.target.value)}
          />

          <button type="submit">Register</button>
        </form>
      </div>
      <a href="/" role="button" className="button">
        Volver a inicio
      </a>
    </Layout>
  );
};

export default Register;
