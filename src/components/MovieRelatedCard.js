import React from 'react'
import { useSelector } from 'react-redux';
import { Badge } from 'react-bootstrap';

const MovieRelatedCard = ({ movie }) => {
  const {genreList}=useSelector((state)=>state.movie);
  return (
    <div className='relate-card' style={{ backgroundImage: "url(" + `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/${movie?.backdrop_path}` + ")" }}>MovieRelatedCard
      
      <div className='overlay'>
        <h1>{movie?.title}</h1>
        <div>
         
        </div>
        <div>
          <span>{movie?.vote_average}</span>
          <span>{movie.adult ? "청불" : "Under 18"}</span>
        </div>
      </div>
    </div>
  )
}

export default MovieRelatedCard