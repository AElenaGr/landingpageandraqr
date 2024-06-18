import React from "react";
import PropTypes from "prop-types";
import "./modal.css"; // Asegúrate de crear este archivo para los estilos del modal

const Modal = ({ show, handleClose, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <div className="modal-main">
        <button className="modal-close-button" onClick={handleClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  children: PropTypes.node
};

export default Modal;
