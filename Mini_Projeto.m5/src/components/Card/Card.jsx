import React from 'react';
import './Card.css';

const Card = ({ user }) => {
  return (
    <div className="card">
      <h3>{user.raceNumber}</h3>
      <p>Status: {user.statusComplemented ? "Completo" : "Incompleto"}</p>
      <span>Data: {user.createdAt}</span>
    </div>
  );
};

export default Card;
