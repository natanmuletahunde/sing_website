/* eslint-disable no-unused-vars */
// src/pages/HomePage.jsx
import React from 'react';
import './HomePage.css'; // Import your CSS file

const HomePage = () => {
  return (
    <div>
    
      <div
        className="min-h-screen bg-cover bg-no-repeat bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1522863602463-afebb8886ab2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2luZ3xlbnwwfHwwfHx8MA%3D%3D')`,
        }}
      >
        <h1 className="text-white text-5xl font-bold drop-shadow-md">
          Welcome to Our Sing Song  Website
        </h1>
      </div>


      <div className="p-8 animated-background">
        <h2 className="text-3xl font-bold mb-4 text-white">Featured Music</h2>
        <p className="mb-4 text-white">Here are some of our featured tracks:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      
          <div className="bg-white p-4 rounded-lg shadow">
            <img
              src="https://variety.com/wp-content/uploads/2024/04/Mandisa.jpg" // Replace with actual image URL
              alt="Track 1"
              className="mb-2 rounded"
            />
            <h3 className="font-semibold">Track 1</h3>
            <p>Artist 1</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <img
              src="https://via.placeholder.com/150" // Replace with actual image URL
              alt="Track 2"
              className="mb-2 rounded"
            />
            <h3 className="font-semibold">Track 2</h3>
            <p>Artist 2</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <img
              src="https://via.placeholder.com/150" // Replace with actual image URL
              alt="Track 3"
              className="mb-2 rounded"
            />
            <h3 className="font-semibold">Track 3</h3>
            <p>Artist 3</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <img
              src="https://via.placeholder.com/150" // Replace with actual image URL
              alt="Track 4"
              className="mb-2 rounded"
            />
            <h3 className="font-semibold">Track 4</h3>
            <p>Artist 4</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
