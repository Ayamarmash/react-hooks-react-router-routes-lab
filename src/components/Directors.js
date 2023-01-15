import React from "react";
import {directors} from "../data";

function Directors() {
  let directorsList = directors.map((director) => {
    return <div>
      <h2>{director.name}</h2>
      <ul>
        {
          director.movies.map((movie) => {
            return <li>{movie}</li>
          })
        }
      </ul>
    </div>
  })
  return <div>
    <h1>Directors Page</h1>
    {directorsList}
  </div>;
}

export default Directors;
