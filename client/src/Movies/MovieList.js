import React from 'react';
import {Link} from 'react-router-dom';



const MovieList = props => {
  console.log(props.movieList)
  return (
 
    <div className="movie-list">
      {props.movieList.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails({ movie }) {
  console.log(movie)
  const { title, director, metascore, stars, id } = movie;
  return (
    
    <Link to={`/movies/${id}`}>
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
     </Link>
  );
}

export default MovieList;
