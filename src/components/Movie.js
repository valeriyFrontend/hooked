import React, { useEffect, useState } from "react";

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b";

const Movie = ({ movie }) => {
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?i=${movie?.imdbID}&apikey=4a3b711b`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setMovieData(jsonResponse);
      });
  }, []);

  const poster =
    movie?.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie?.Poster;
  return (
    <div className="movie">
      <h2>{movie.Title}</h2>
      <div className="movie__poster">
        <img
          width="200"
          alt={`The movie titled: ${movie.Title}`}
          src={poster}
        />
        <p className="movie__poster__rating">{movieData?.imdbRating}</p>
      </div>
      <p>({movie?.Year})</p>
    </div>
  );
};

export default Movie;
