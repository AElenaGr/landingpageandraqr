// src/components/mapa.js
import React from 'react';
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Importar los íconos
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

// Configurar los íconos de Leaflet
if (L && L.Icon && L.Icon.Default) {
    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
        iconUrl,
        iconRetinaUrl,
        shadowUrl,
    });
} else {
    console.error("L o L.Icon.Default no está definido.");
}

const LocationMarker = ({ setLatLng }) => {
    useMapEvents({
        click(e) {
            if (e && e.latlng) {
                setLatLng(e.latlng);
            } else {
                console.error("El evento o la latitud/longitud no están definidos.");
            }
        },
    });

    return null;
};

const MapaConMarcador = ({ setLatLng }) => {
    return (
        <MapContainer center={[40.030501, -3.604052]} zoom={13} style={{ height: '70vh', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <LocationMarker setLatLng={setLatLng} />
        </MapContainer>
    );
};

export default MapaConMarcador;
