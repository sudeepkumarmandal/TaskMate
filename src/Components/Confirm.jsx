import React from "react";
import "./Confirm.css";
const Confirm = ({ title, message, onCancel, onConfirm }) => {
   
      //if (!open) return null;

  return (
    
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>{title}</h2>
        <p>{message}</p>

        <div className="modal-buttons">
          <button className="cancel-btn" onClick={onCancel}>
            Cancel
          </button>
          <button className="confirm-btn" onClick={onConfirm}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );

  
};

export default Confirm;
