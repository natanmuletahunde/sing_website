/* eslint-disable no-unused-vars */
// src/pages/HomePage.jsx
import React from 'react';

const HomePage = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-no-repeat bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url('https://media.istockphoto.com/id/92026251/photo/hip-hop-musician.jpg?s=612x612&w=0&k=20&c=ZTrTLbbgglN_HWDhy1f_NMr0sJZYunWIEayj_qlBD9A=')`,
      }}
    >
      <h1 className="text-white text-5xl font-bold drop-shadow-md">
        Welcome to Our Music Website
      </h1>
    </div>
  );
};

export default HomePage;
