import * as React from "react"

const LoginForm = () => (
  <div style={{ textAlign: 'center' }}>
    <h2>Acceso empleados</h2>
    <form>
      <label htmlFor="usuario">Usuario</label>
      <input type="text" id="usuario" name="usuario" />
      <br />
      <label htmlFor="contrasena">Contraseña</label>
      <input type="password" id="contrasena" name="contrasena" />
      <br />
      <button type="submit">Entrar</button>
    </form>
    <a href="#">Olvidaste contraseña</a>
  </div>
)

export default LoginForm
