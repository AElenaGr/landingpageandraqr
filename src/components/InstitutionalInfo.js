// // src/components/InstitutionalInfo.js
// import React, { useState } from 'react';

// const InstitutionalInfo = () => {
//   const [visible, setVisible] = useState(false);

//   const toggleVisibility = () => {
//     setVisible(!visible);
//   };

//   return (
//     <div>
//       <button onClick={toggleVisibility} style={{ padding: '10px', fontSize: '16px', cursor: 'pointer' }}>
//         {visible ? 'Ocultar Información Institucional' : 'Mostrar Información Institucional'}
//       </button>
//       {visible && (
//         <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', margin: '20px 0' }}>
//           <h2>Patrimonio Nacional</h2>
//           <p>
//             Patrimonio Nacional es el organismo responsable de la gestión y preservación del patrimonio histórico, artístico y cultural de España. 
//             Nuestra misión es conservar y poner en valor los bienes culturales que han sido legados a lo largo de la historia, 
//             asegurando su acceso y disfrute por parte de las generaciones presentes y futuras.
//           </p>
//           <p>
//             Gestionamos un conjunto de bienes de excepcional importancia, incluyendo palacios, monasterios, conventos, jardines y espacios naturales 
//             de gran valor histórico y artístico. Nos esforzamos por mantener estos tesoros en las mejores condiciones posibles, 
//             llevando a cabo tareas de restauración, conservación y difusión.
//           </p>
//           <p>
//             Además, Patrimonio Nacional organiza eventos culturales, exposiciones y visitas guiadas para fomentar el conocimiento y la apreciación 
//             del patrimonio entre el público general. Colaboramos con diversas instituciones educativas y culturales para promover la investigación 
//             y el estudio de nuestros bienes.
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default InstitutionalInfo;
