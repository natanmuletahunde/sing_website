/* eslint-disable no-unused-vars */
// src/pages/ListOfMusic.jsx
import React, { useEffect, useState } from 'react';

const ListOfMusic = () => {
  const [musicList, setMusicList] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to fetch songs from RapidAPI
  const fetchChristianSongs = async () => {
    const url = 'https://spotify23.p.rapidapi.com/albums/?ids=3IBcauSj5M2A6lTeffJzdv';
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'fb06652415mshbc79cb8a0d3953bp125e5djsn170faea112e1',
        'x-rapidapi-host': 'spotify23.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json(); // Use .json() instead of .text() for JSON data
      console.log(result); // Log the full result for debugging
      
      // Assuming you want to extract and set the albums from the result
      const albums = result.data; // Adjust according to the actual structure of the result
      setMusicList(albums);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false); // Ensure loading state is false on error
    }
  };

  useEffect(() => {
    fetchChristianSongs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold">List of Music</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {musicList.map((album) => (
          <div key={album.id} className="bg-gradient-to-r from-black to-blue-700 p-4 rounded-lg shadow">
            <img
              src={album.images[0]?.url}
              alt={album.name}
              className="mb-2 rounded object-cover w-full h-48"
            />
            <h3 className="font-semibold text-white">{album.name}</h3>
            <p className="text-white">{album.artists.map(artist => artist.name).join(', ')}</p>
            <a href={album.external_urls.spotify} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Listen</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListOfMusic;
