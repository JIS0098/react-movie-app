import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { movieAction } from '../redux/actions/movieAction';
import { ClipLoader } from 'react-spinners';
import { Container, Row, Col } from "react-bootstrap";
import MoviesCollectionCard from '../components/MoviesCollectionCard';
import "../css/movie.css";
import Pagination from '../components/Pagination';
import { useSearchParams } from 'react-router-dom';
import api from '../redux/api';



const API_KEY = process.env.REACT_APP_API_KEY;


const Movies = () => {
  const { popularMovies, loading, } = useSelector((state) => state.movie);
  const [query, setQuery]= useSearchParams("");
  const [searchMovie , setSearchMovie]= useState({});
  const dispatch = useDispatch();
  console.log("인기", popularMovies);
  let keyword = query.get("q")
  const getSearchMovie=async()=>{
    let searchMovieApi= await api.get(`/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${keyword}`)
    let searchMovie=searchMovieApi.data
    setSearchMovie(searchMovie)
    console.log("검색데이터",searchMovie)
  }


  useEffect(() => {
    dispatch(movieAction.getMovies());
    getSearchMovie();
  }, [query])

  if (loading) {
    return <ClipLoader color="#ffff" loading={loading} size={100} />;
  }

  return (
    <Container>
      <Row>
        <Col lg={4}>
          <div>
            <div>Sort</div>
            <div>Filter</div>
          </div>
        </Col>
        <Col lg={8}>
          <Row>
            <Col lg={12}>
              <div className='collection-card-list'>{
              keyword===null?
              popularMovies.results && popularMovies.results.map((movie) => (<MoviesCollectionCard movie={movie} />)):
              searchMovie.results && searchMovie.results.map((movie) => (<MoviesCollectionCard movie={movie} />))
              }
              </div>
              <div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>

  )
}

export default Movies
