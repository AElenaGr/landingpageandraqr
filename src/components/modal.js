import React from "react";
const Modal = ({ show, handleClose, children }) => {
  if (!show) return null;
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={handleClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};
export default Modal;