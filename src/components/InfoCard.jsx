import React from 'react';
import './InfoCard.css';
const InfoCard = ({ icon, title, description, onClick }) => {
  return (
    <div className="info-card">
      <div className="info-card-icon">{icon}</div>
      <h2 className="info-card-title">{title}</h2>
      <p className="info-card-description">{description}</p>
      <button className="info-card-button" onClick={onClick}>
        →
      </button>
    </div>
  );
};

export default InfoCard;
