/* eslint-disable no-unused-vars */
// src/pages/ListOfNews.jsx
import React, { useEffect, useState } from 'react';

const ListOfNews = () => {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchNews = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/news');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const articles = data.articles || []; // Assuming the response structure has 'articles'
      setNewsList(articles);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching news: {error}</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold">Latest News</h2>
      <ul>
        {newsList.map((newsItem, index) => (
          <li key={index} className="mb-4">
            <h3 className="text-xl font-bold">{newsItem.title}</h3>
            <p>{newsItem.description}</p>
            <a href={newsItem.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
              Read more
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListOfNews;
