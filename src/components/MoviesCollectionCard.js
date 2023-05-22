import React from "react";
import { useSelector } from "react-redux";
import { Badge } from "react-bootstrap";


const MoviesCollectionCard = ({ movie }) => {
    const { genreList } = useSelector((state) => state.movie)
    return (
        <div className="collection-card" 
            style={{ backgroundImage: "url(" + `https://image.tmdb.org/t/p/original////${movie?.poster_path}` + ")", }}>    
            <div className="card-info">
                <h1>{movie?.title}</h1>
                <div>
                    {movie.genre_ids && movie.genre_ids.map((id) => (<Badge key={id} bg='danger'>{genreList.find((item) => item.id === id).name}</Badge>))}
                </div>
                <div>
                    <span>{movie?.vote_average}</span>
                    <span>{movie.adult ? "청불" : "Under 18"}</span>
                </div>
            </div> 
        </div>
    );
};

export default MoviesCollectionCard;
