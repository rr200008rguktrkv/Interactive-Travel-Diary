// src/pages/ProfileCard.js
import React from 'react';
import './ProfileCard.css';

const ProfileCard = ({ user }) => {
  return (
    <div className="profilecard-container">
      <img src="/profile-icon.png" alt="Profile" className="profilecard-image" />
      <h2>{user.username}</h2>
      <p><strong>Email:</strong> {user.email}</p>
      {user.enthusiasm && (
        <p><strong>Enthusiasm:</strong> {user.enthusiasm}</p>
      )}
    </div>
  );
};

export default ProfileCard;
