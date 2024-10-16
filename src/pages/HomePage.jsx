/* eslint-disable no-unused-vars */
import React from "react";
import "./HomePage.css"; // Import your CSS file

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="min-h-screen bg-cover bg-no-repeat bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1522863602463-afebb8886ab2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2luZ3xlbnwwfHwwfHx8MA%3D%3D')`,
        }}
      >
        <h1 className="text-white text-5xl font-bold drop-shadow-md">
          Welcome to Our Sing Song Website
        </h1>
      </div>

      {/* Featured Music Section */}
      <div className="p-8 animated-background">
        <h2 className="text-5xl font-bold mb-4 text-white text-center font-poppins">
          Featured Music
        </h2>
        <p className="mb-4 text-xl text-white text-center font-poppins">
          Here are some of our featured tracks:
        </p>

        {/* Grid for Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* First 4 Cards */}
          <div className="bg-gradient-to-r from-black to-blue-700 p-4 rounded-lg shadow">
            <img
              src="https://variety.com/wp-content/uploads/2024/04/Mandisa.jpg"
              alt="Track 1"
              className="mb-2 rounded object-cover w-full h-48 transform transition-transform duration-300 ease-in-out hover:scale-105"
            />
            <h3 className="font-semibold text-white">Track 1</h3>
            <p className="text-white">Mandisa</p>
          </div>
          <div className="bg-gradient-to-r from-black to-blue-700 p-4 rounded-lg shadow">
            <img
              src="https://c8.alamy.com/comp/BB89RH/swiss-schlager-singer-christian-duss-performing-live-at-the-9th-schlager-BB89RH.jpg"
              alt="Track 2"
              className="mb-2 rounded object-cover w-full h-48 transform transition-transform duration-300 ease-in-out hover:scale-105"
            />
            <h3 className="font-semibold text-white">Track 2</h3>
            <p className="text-white">Swiss-Schlager</p>
          </div>
          <div className="bg-gradient-to-r from-black to-blue-700 p-4 rounded-lg shadow">
            <img
              src="https://julieroys.com/wp-content/uploads/2021/09/AnneWilson-music-artist.png"
              alt="Track 3"
              className="mb-2 rounded object-cover w-full h-48 transform transition-transform duration-300 ease-in-out hover:scale-105"
            />
            <h3 className="font-semibold text-white">Track 3</h3>
            <p className="text-white">Anne Wilson</p>
          </div>
          <div className="bg-gradient-to-r from-black to-blue-700 p-4 rounded-lg shadow">
            <img
              src="https://cdn.corpemf.com/blogs/19108.png"
              alt="Track 4"
              className="mb-2 rounded object-cover w-full h-48 transform transition-transform duration-300 ease-in-out hover:scale-105"
            />
            <h3 className="font-semibold text-white">Track 4</h3>
            <p className="text-white">Corpemf</p>
          </div>

          {/* Additional 4 Cards */}
          <div className="bg-gradient-to-r from-black to-blue-700 p-4 rounded-lg shadow">
            <img
              src="https://www.life1025.com/wp-content/uploads/2023/06/chris-tomlin-official_19.jpg"
              alt="Track 5"
              className="mb-2 rounded object-cover w-full h-48 transform transition-transform duration-300 ease-in-out hover:scale-105"
            />
            <h3 className="font-semibold text-white">Track 5</h3>
            <p className="text-white">Chris Tomlin</p>
          </div>
          <div className="bg-gradient-to-r from-black to-blue-700 p-4 rounded-lg shadow">
            <img
              src="https://www.nederlanderconcerts.com/assets/img/MichaelWSmith_Grove_Press_1440x735-73a776f963.jpg"
              alt="Track 6"
              className="mb-2 rounded object-cover w-full h-48 transform transition-transform duration-300 ease-in-out hover:scale-105"
            />
            <h3 className="font-semibold text-white">Track 6</h3>
            <p className="text-white">Michael W. Smith</p>
          </div>
          <div className="bg-gradient-to-r from-black to-blue-700 p-4 rounded-lg shadow">
            <img
              src="https://d187goyob322lh.cloudfront.net/Pictures/480xAny/0/1/8/38018_laurendaigle_657484.jpg"
              alt="Track 7"
              className="mb-2 rounded object-cover w-full h-48 transform transition-transform duration-300 ease-in-out hover:scale-105"
            />
            <h3 className="font-semibold text-white">Track 7</h3>
            <p className="text-white">Lauren Daigle</p>
          </div>
          <div className="bg-gradient-to-r from-black to-blue-700 p-4 rounded-lg shadow">
            <img
              src="https://i.ytimg.com/vi/ix7UIroX4wk/maxresdefault.jpg"
              alt="Track 8"
              className="mb-2 rounded object-cover w-full h-48 transform transition-transform duration-300 ease-in-out hover:scale-105"
            />
            <h3 className="font-semibold text-white">Track 8</h3>
            <p className="text-white">Kari Jobe</p>
          </div>

          {/* Another 4 Cards Below */}
          <div className="bg-gradient-to-r from-black to-blue-700 p-4 rounded-lg shadow">
            <img
              src="https://example.com/path/to/image1.jpg"
              alt="Track 9"
              className="mb-2 rounded object-cover w-full h-48 transform transition-transform duration-300 ease-in-out hover:scale-105"
            />
            <h3 className="font-semibold text-white">Track 9</h3>
            <p className="text-white">Artist Name 9</p>
          </div>
          <div className="bg-gradient-to-r from-black to-blue-700 p-4 rounded-lg shadow">
            <img
              src="https://example.com/path/to/image2.jpg"
              alt="Track 10"
              className="mb-2 rounded object-cover w-full h-48 transform transition-transform duration-300 ease-in-out hover:scale-105"
            />
            <h3 className="font-semibold text-white">Track 10</h3>
            <p className="text-white">Artist Name 10</p>
          </div>
          <div className="bg-gradient-to-r from-black to-blue-700 p-4 rounded-lg shadow">
            <img
              src="https://example.com/path/to/image3.jpg"
              alt="Track 11"
              className="mb-2 rounded object-cover w-full h-48 transform transition-transform duration-300 ease-in-out hover:scale-105"
            />
            <h3 className="font-semibold text-white">Track 11</h3>
            <p className="text-white">Artist Name 11</p>
          </div>
          <div className="bg-gradient-to-r from-black to-blue-700 p-4 rounded-lg shadow">
            <img
              src="https://example.com/path/to/image4.jpg"
              alt="Track 12"
              className="mb-2 rounded object-cover w-full h-48 transform transition-transform duration-300 ease-in-out hover:scale-105"
            />
            <h3 className="font-semibold text-white">Track 12</h3>
            <p className="text-white">Artist Name 12</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
