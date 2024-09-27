/* eslint-disable no-unused-vars */
// src/pages/HomePage.jsx
import React from 'react';
import MusicCard from '../components/MusicCard';

const HomePage = () => {
  const musicData = [
    { title: "Song 1", artist: "Artist 1", image: "path/to/image1.jpg" },
    { title: "Song 2", artist: "Artist 2", image: "path/to/image2.jpg" },
    { title: "Song 3", artist: "Artist 3", image: "path/to/image3.jpg" },
    // Add more songs as needed
  ];

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4">Latest Music</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {musicData.map((music, index) => (
          <MusicCard key={index} title={music.title} artist={music.artist} image={music.image} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
