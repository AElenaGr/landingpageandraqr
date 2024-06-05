import React, { useState } from 'react';
function MyComponent({ onColorChange, onSizeChange }) {
  const [selectedColor, setSelectedColor] = useState('negro');
  const [selectedSize, setSelectedSize] = useState('pequeño');
  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
    onColorChange(event.target.value);
  };
  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
    onSizeChange(event.target.value);
  };
  return (
    <div>
      <label htmlFor="colorSelect">Elige color</label>
      <select id="colorSelect" value={selectedColor} onChange={handleColorChange}>
        <option value="black">Negro</option>
        <option value="blue">Azul</option>
        <option value="red">Rojo</option>
      </select>
      <label htmlFor="sizeSelect">Elige tamaño</label>
      <select id="sizeSelect" value={selectedSize} onChange={handleSizeChange}>
        <option value="100">Pequeño</option>
        <option value="200">Mediano</option>
        <option value="300">Grande</option>
      </select>
      {/* Custom styling using CSS (optional) */}
      <style jsx="true">
        {`
          label {
            display: block;
            margin-bottom: 5px;
          }
          select {
            width: 150px;
            padding: 5px;
            border: 1px solid #ccc;
            border-radius: 4px;
            margin-bottom: 10px;
          }
        `}
      </style>
    </div>
  );
}
export default MyComponent;