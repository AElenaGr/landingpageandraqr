 import React from 'react'
const CerrarSesion = ()=>{
    const handleCerrarSesion= ()=>{
        localStorage.removeItem('tandem_nombre')
        localStorage.removeItem('tandem_id')
        localStorage.removeItem('tandem_email')
        window.location.href='/'
    }
    return (
        <>
        <button onClick={handleCerrarSesion}>Cerrar sesion</button>
        </>
    )
}
export default CerrarSesion