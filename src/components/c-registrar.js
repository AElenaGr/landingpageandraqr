import React, { useState } from "react"

const Registro = () => {
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [departamento, setDepartamento] = useState("")
  // const [resServidor, setResServidor]=useState(false)

  const hadleNombre = e => setNombre(e.target.value)
  const hadleEmail = e => setEmail(e.target.value)
  const hadlePassword = e => setPassword(e.target.value)
  const hadleDepartamento = e => setDepartamento(e.target.value)

  const handleRegistro = async () => {
    try {
      const response = await fetch(
        "http://localhost/api-qr-tandem-andra/v1/register-user.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nombre: nombre,
            departamento: departamento,
            email: email,
            password: password,
          }),
        }
      )
      const data = await response.json()
      console.log(data)
      // setResServidor=(true)
    } catch (error) {
      console.error("Error registrando usuario", error)
    }
  }

  return (
    <div>
      {/* <div className='respuesta'>
            {resServidor&& 'correcto'}
          </div> */}
      <label htmlFor="nombre">Nombre:</label>
      <input
        type="text"
        placeholder="Introduce tu nombre"
        id="nombre"
        value={nombre}
        onChange={hadleNombre}
      />
      <label htmlFor="departamento">Departamento:</label>
      <input
        type="text"
        placeholder="Introduce tu departamento"
        id="departamento"
        value={departamento}
        onChange={hadleDepartamento}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="text"
        placeholder="Introduce tu email"
        id="email"
        value={email}
        onChange={hadleEmail}
      />
      <label htmlFor="password">Contraseña:</label>
      <input
        type="text"
        placeholder="Introduce tu Contraseña"
        id="password"
        value={password}
        onChange={hadlePassword}
      />
      <button onClick={handleRegistro}>Registro</button>
    </div>
  )
}

export default Registro
