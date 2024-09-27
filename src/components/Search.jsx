import { useState } from 'react';
import axios from 'axios';
import TrackList from '../components/TrackList';

const Search = () => {
  const [query, setQuery] = useState('');
  const [tracks, setTracks] = useState([]);

  const searchTracks = (e) => {
    e.preventDefault();
    axios.get(`https://api.example.com/search?q=${query}`, {
      headers: {
        'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
      }
    }).then(response => {
      setTracks(response.data.tracks.items);
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Search Music</h2>
      <form onSubmit={searchTracks}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-2 rounded-md bg-gray-700 text-white"
          placeholder="Search for a track or artist"
        />
        <button type="submit" className="mt-4 bg-blue-600 px-3 py-2 rounded-md">
          Search
        </button>
      </form>
      {tracks.length > 0 && <TrackList tracks={tracks} />}
    </div>
  );
};

export default Search;
