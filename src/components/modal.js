import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Modal2() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} className='button-collapse'>Política de datos</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div>
        <h3>Información básica sobre Protección de Datos</h3>
        <p>Responsable: Patrimonio Nacional.</p>
        <p>Finalidad: Acceso personalizado a los servicios interactivos que ofrece el generador de qr de PAtrimonio Nacional.</p>
        <p>Legitimación: Consentimiento del interesado.</p>
        <p>Destinatarios: No se cederán datos a terceros.</p>
        </div>
          <Button onClick={handleClose}>cerrar</Button>
        </Box>
      </Modal>
    </div>
  );
}