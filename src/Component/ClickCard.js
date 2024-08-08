// App.js
import React from 'react';
import '../Component/ClickCard.css'
//import './App.css'; // Import CSS file for styling

// PopupCard component
const ClickCard = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render if not open

  return (
    <div className="popup- Click">
      <div className="popup">
        <p>Recenty Added Items</p>
        <i class="bi bi-x"></i>
      </div>
    </div>
  );
};

// Main App component
export default ClickCard
