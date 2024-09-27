import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Player = () => {
  const { id } = useParams();
  const [track, setTrack] = useState(null);

  useEffect(() => {
    axios.get(`https://api.example.com/tracks/${id}`, {
      headers: {
        'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
      }
    }).then(response => {
      setTrack(response.data);
    });
  }, [id]);

  if (!track) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">{track.name}</h2>
      <p>By {track.artists[0].name}</p>
      <audio controls>
        <source src={track.preview_url} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default Player;
