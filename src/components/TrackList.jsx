/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const TrackList = ({ tracks }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tracks.map((track) => (
        <div key={track.id} className="bg-gray-800 p-4 rounded-lg">
          <img src={track.album.images[0].url} alt={track.name} className="w-full h-64 object-cover rounded-md" />
          <h3 className="text-lg font-semibold mt-2">{track.name}</h3>
          <p>{track.artists[0].name}</p>
          <Link to={`/player/${track.id}`} className="mt-4 inline-block bg-green-600 px-3 py-2 rounded-md">
            Play
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TrackList;
