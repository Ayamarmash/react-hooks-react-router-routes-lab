import React from "react";
import {actors} from "../data";

function Actors() {
  let actorsList = actors.map((actors) => {
    return <div>
      <h2>{actors.name}</h2>
      <ul>
        {
          actors.movies.map((movie) => {
            return <li>{movie}</li>
          })
        }
      </ul>
    </div>
  })
  return <div>
    <h1>Directors Page</h1>
    {actorsList}
  </div>;
}

export default Actors;
