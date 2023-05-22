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
  const dispatch = useDispatch();
  console.log("인기", popularMovies);



  useEffect(() => {
    dispatch(movieAction.getMovies());
    console.log("검색",query.get("q"))
  }, [])

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
              <div className='collection-card-list'>{popularMovies.results && popularMovies.results.map((movie) => (<MoviesCollectionCard movie={movie} />))
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
