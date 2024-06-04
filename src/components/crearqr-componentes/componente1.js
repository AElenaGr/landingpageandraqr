import React, { useState } from 'react';

function MyComponent() {
  const [selectedValue, setSelectedValue] = useState('option1'); // Initial value

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <label htmlFor="mySelect">Elige color</label>
      <select id="mySelect" value={selectedValue} onChange={handleChange}>
        <option value="negro">Negro</option>
        <option value="azul">Azul</option>
        <option value="rojo">Rojo</option>
      </select>
      <label htmlFor="mySelect">Elige tamaño</label>
      <select id="mySelect" value={selectedValue} onChange={handleChange}>
        <option value="pequeño">Pequeño</option>
        <option value="mediano">Mediano</option>
        <option value="grande">Grande</option>
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
          }
        `}
      </style>
    </div>
  );
}

export default MyComponent;