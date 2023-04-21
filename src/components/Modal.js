// styles import
import React from "react";
import "./modal.css";
import ReactDOM from "react-dom";

const Modal = ({ children, closeModal }) => {
  return ReactDOM.createPortal(
    <div className="modal-backdrop">
      <div className="modal">
        {children}
        <br />
        <button onClick={closeModal}>Close</button>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
