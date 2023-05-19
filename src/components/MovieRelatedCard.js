import React from 'react'
import { useSelector } from 'react-redux';
import { Badge } from 'react-bootstrap';
const MovieRelatedCard = ({ related }) => {

  return (
  
  <div className='related-card' style={{ backgroundImage: "url(" + `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/${related?.backdrop_path}` + ")" }}>
    card</div>


  )
}

export default MovieRelatedCard