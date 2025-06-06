import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Feature.css';

const Feature = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/now_playing', {
          params: {
            api_key: import.meta.env.VITE_TMDB_API_KEY,
            language: 'en-US',
            page: 2,
          },
        });

        const aMovies = response.data.results;
        const shuffle = aMovies.sort(() => 0.5 - Math.random());
        const randomFive = shuffle.slice(0, 16);

        setMovies(randomFive);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    }


        

    fetchMovies();
  }, []);

  return (
    <div className="feature-section">
      <h2>Featured Now Playing</h2>
      <div className="feature-movies">
        {movies.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id} className="movie-card">
            {movie.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            )}
            <p>{movie.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Feature;