// App.js
import React from 'react';
import '../Component/PopupCard.css'
//import './App.css'; // Import CSS file for styling

// PopupCard component
const PopupCard = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render if not open

  return (
    <div className="popup-over">
      <div className="popup-card1">
        
        <p>Welcome </p>
            <p>To Access Account And Manage</p>
            <p>Order</p>
       
        <button onClick={onClose}>LOGIN</button>
        <button onClick={onClose} style={{marginLeft:'10px'}}>SIGN UP</button>

      </div>
    </div>
  );
};

// Main App component
export default PopupCard
