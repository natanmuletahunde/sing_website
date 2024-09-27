/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// src/components/MusicCard.jsx
import React from 'react';

const MusicCard = ({ title, artist, image }) => {
  return (
    <div className="border rounded-lg p-4 shadow-lg">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded" />
      <h3 className="font-bold mt-2">{title}</h3>
      <p className="text-gray-600">{artist}</p>
    </div>
  );
};

export default MusicCard;
