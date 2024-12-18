import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

function MovieList({ onMovieClick }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    console.log('API URL:', process.env.REACT_APP_MOVIE_API_URL);

    axios.get(`${process.env.REACT_APP_MOVIE_API_URL}/movies`).then((response) => {
        setMovies(response.data.movies);
    }).catch((error) => {
        console.error('Error fetching movies:', error);
    });
    }, []);

  return (
    <ul>
      {movies.map((movie) => (
        <li className="movieItem" key={movie.id} onClick={() => onMovieClick(movie)}>
          {movie.title}
        </li>
      ))}
    </ul>
  );
}

MovieList.propTypes = {
  onMovieClick: PropTypes.func.isRequired,
};

export default MovieList;
