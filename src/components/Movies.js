import React from "react";
import {movies} from "../data";

function Movies() {
  let moviesList = movies.map((movie) => {
    return <div>

      {`${movie.title} ${movie.time}`}
      <ul>{movie.genres.map((genre) => {
        return <li>{genre}</li>
      })}
      </ul>

    </div>
  })
  return <div>
    <h1>Movies Page</h1>
    {moviesList}
  </div>;
}

export default Movies;
