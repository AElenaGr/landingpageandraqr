// savedb.js
import React, { useState } from 'react';
import { Button } from '@mui/material';

const SaveDb = ({ data, nref, desc }) => {
    const [mensaje, setMensaje] = useState(false);
    const [respuesta, setRespuesta] = useState('');
    const userId = typeof window !== 'undefined' ? localStorage.getItem('tandem_id') : null;

    const saveQr = async () => {
        try {
            const response = await fetch('http://localhost/api-qr-tandem/v1/create-qr.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    data: data,
                    nombre_ref: nref,
                    description: desc,
                    created_by: userId
                })
            });

            const data = await response.json();
            setRespuesta(data.message);
            setMensaje(true);
            console.log(data.message);
        } catch (error) {
            console.error('Error creando código QR', error);
        }
    };

    return (
        <>
            <Button onClick={saveQr} className="button-collapse">
                Guardar
            </Button>
            {mensaje && <p>{respuesta}</p>}
        </>
    );
};

export default SaveDb;
