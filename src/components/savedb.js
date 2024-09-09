import React, { useState, useEffect } from 'react';
import { Button } from "@mui/material";

const SaveDb = ({data, nref, desc}) => {
    const [mensaje, setMensaje] = useState(false);
    const [respuesta, setRespuesta] = useState('');
    const [userId, setUserId] = useState(null);

    // Solo accede a localStorage cuando el componente está montado en el cliente
    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedUserId = localStorage.getItem('tandem_id');
            setUserId(storedUserId);
        }
    }, []);

    const saveQr = async () => {
        try {
            const response = await fetch('https://andra.tandempatrimonionacional.eu/api-qr-tandem/v1/create-qr.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "data": data,
                    "nombre_ref": nref,
                    "description": desc,
                    "created_by": userId
                })
            });
            const respuesta = await response.json();
            setRespuesta(respuesta.message);
            setMensaje(true);
            console.log(respuesta.message);
        } catch (error) {
            console.error('Error creando código QR', error);
        }
    };

    return (
        <>
            <Button onClick={saveQr} className='button-collapse'>Guardar</Button>
            {mensaje && <p>{respuesta}</p>}
        </>
    );
};

export default SaveDb;
