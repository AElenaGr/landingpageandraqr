componente cerrar sesion import React from 'react'
const CerrarSesion = ()=>{
    const handleCerrarSesion= ()=>{
        localStorage.removeItem('tndm_token')
        localStorage.removeItem('tndm_id')
        localStorage.removeItem('tndm_email')
        window.location.href='/'
    }
    return (
        <>
        <button onClick={handleCerrarSesion}>Cerrar sesion</button>
        </>
    )
}
export default CerrarSesion