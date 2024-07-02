import React, { useState } from 'react';
const UploadUserImage = ({idUser}) => {
    const [image, setImage] = useState(null);
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!image) {
            setMessage('Por favor, selecciona una imagen.');
            return;
        }
        const formData = new FormData();
        formData.append('image', image);
        formData.append('id',  idUser); // Cambia este valor según sea necesario
        // lo suyo seria capturar el id de localstorage user id
        setLoading(true);
        setMessage('');
        try {
            const response = await fetch('http://localhost/api-qr-tandem/v1/upload-image-user.php', {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            if (response.ok) {
                setMessage(data.message || 'Imagen subida exitosamente.');
            } else {
                setMessage(data.message || 'Error al subir la imagen.');
            }
        } catch (error) {
            setMessage('Error al conectar con el servidor.');
            console.error('Error subiendo la imagen:', error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            <button type="submit" disabled={loading}>
                {loading ? 'Subiendo...' : 'Subir Imagen'}
            </button>
            {message && <p>{message}</p>}
        </form>
    );
};
export default UploadUserImage;