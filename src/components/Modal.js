// styles import
import React from "react";
import "./modal.css";
import ReactDOM from "react-dom";

const Modal = ({ children, closeModal, isModeModal }) => {
  return ReactDOM.createPortal(
    <div className="modal-backdrop">
      <div
        className="modal"
        style={{
          border: "4px solid",
          borderColor: isModeModal ? "yellowgreen" : "red",
          textAlign: "center",
        }}
      >
        {children}
        <br />
        <button
          className={isModeModal ? "modal-btn" : "modal-btn-dark"}
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
