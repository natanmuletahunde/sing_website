import { useEffect, useState } from 'react';
import axios from 'axios';
import TrackList from '../components/TrackList';

const Home = () => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    // Fetch popular tracks from the API
    axios.get('https://api.example.com/popular-tracks', {
      headers: {
        'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
      }
    }).then(response => {
      setTracks(response.data.tracks);
    });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Popular Tracks</h2>
      <TrackList tracks={tracks} />
    </div>
  );
};

export default Home;
