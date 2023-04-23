// styles import
import React from "react";
import "./modal.css";
import ReactDOM from "react-dom";

const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="modal-backdrop">
      <div
        className="modal"
        style={{
          border: "4px solid",
          borderColor: "yellowgreen",
          textAlign: "center",
        }}
      >
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
