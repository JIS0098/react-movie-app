import React from 'react'
import { useSelector } from 'react-redux';
import { Badge } from 'react-bootstrap';
const MovieRelatedCard = ({ related }) => {
  const { genreList } = useSelector((state) => state.movie)
  return (
    <div className='related-card' style={{ backgroundImage: "url(" + `https://image.tmdb.org/t/p/original///${related?.backdrop_path}` + ")" }}>
      <div className='overlay'>
        <h1>{related?.title}</h1>
        <div>
        { related.genre_ids.map((id)=>(<Badge key={id} bg='danger'>{genreList.find((item)=>item.id===id).name}</Badge>))}
        </div>
        <div>
          <span>{related?.vote_average}</span>
          <span>{related.adult ? "청불" : "Under 18"}</span>
        </div>
      </div>
    </div>

  )
}

export default MovieRelatedCard