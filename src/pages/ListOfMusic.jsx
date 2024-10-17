/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const ListOfMusic = () => {
  const [musicData, setMusicData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url =
    "https://spotify23.p.rapidapi.com/search/?q=beatles&type=track&offset=0&limit=10&numberOfTopResults=5";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "fb06652415mshbc79cb8a0d3953bp125e5djsn170faea112e1",
      "x-rapidapi-host": "spotify23.p.rapidapi.com",
    },
  };

  useEffect(() => {
    const fetchMusic = async () => {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        // Access the correct path in the response to get track data
        const tracks = result.tracks?.items || []; // Provide default empty array if undefined
        setMusicData(tracks);
        setLoading(false); // Stop loading when data is fetched
      } catch (error) {
        setError("Failed to fetch music data");
        setLoading(false); // Stop loading even if there's an error
        console.error("Error fetching music:", error);
      }
    };

    fetchMusic();
  }, []);

  // If loading, show a loading message
  if (loading) {
    return <p>Loading...</p>;
  }

  // If there is an error, show the error message
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-6">List of Music</h2>
      <p>This page is fetching from the API:</p>

      <div className="grid grid-cols-1 gap-6 mt-4">
        {musicData.length > 0 ? (
          musicData.map((music, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
            >
              <h3 className="text-xl font-bold mb-2">{music.name || "No Title"}</h3>
              <p className="text-gray-700">
                <strong>Artist:</strong>{" "}
                {music.artists
                  ? music.artists.map((artist) => artist.name).join(", ")
                  : "Unknown Artist"}
              </p>
              <p className="text-gray-700">
                <strong>Album:</strong> {music.album?.name || "No Album"}
              </p>
            </div>
          ))
        ) : (
          <p>No music found.</p>
        )}
      </div>
    </div>
  );
};

export default ListOfMusic;
