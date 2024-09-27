/* eslint-disable no-unused-vars */
// src/pages/HomePage.jsx
import React from 'react';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
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

      {/* Second Div Underneath */}
      <div className="p-8 bg-gray-100">
        <h2 className="text-3xl font-bold mb-4">Featured Music</h2>
        <p className="mb-4">Here are some of our featured tracks:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Example Cards */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold">Track 1</h3>
            <p>Artist 1</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold">Track 2</h3>
            <p>Artist 2</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold">Track 3</h3>
            <p>Artist 3</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold">Track 4</h3>
            <p>Artist 4</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
