import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "../css/detail.css";
import Badge from "react-bootstrap/Badge";
import api from "../redux/api";

const API_KEY = process.env.REACT_APP_API_KEY;

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const getMoviesDetail = async () => {
    let detailApi = await api.get(`/movie/${id}?api_key=${API_KEY}&language=en-US`);
    let detailData =detailApi.data;
    setMovie(detailData)
  };
  
  console.log(movie)
  useEffect(() => {
    getMoviesDetail();
  }, []);

  return (
    <div>
      <section
        className="detail-banner"
        style={{
          backgroundImage:
            'url("https://images.hdqwalls.com/download/polygonal-abstract-red-dark-background-eo-1280x1024.jpg")',
        }}
      >
        <Container>
          <Row>
            <Col className="banner-area" lg={12}>
              <h1>NETFLIX</h1>
              <ul className="banner-text">
                <li>
                  <a href="/">HOME</a>
                </li>
                <li>
                  <span>{movie?.title}</span>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
      <Container>
        <Row>
          <Col lg={6}>
            <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`} />
          </Col>
          <Col lg={6}>
            <Badge bg="danger">zz</Badge>
            <div>{movie?.title}</div>
            <ul>
              <li>{movie?.vote_average}</li>
              <li>{movie?.popularity}</li>
              <li>{movie.adult? "":"Under 18"}</li>
            </ul>
            <div>{movie?.overview}</div>
            <div className="movie-info-list">
              <ul>
                <li>
                <Badge bg="danger">zz</Badge>
                <div>{movie?.budget}</div>
                </li>
                <li>
                <Badge bg="danger">zz</Badge>
                <div>{movie?.revenue}</div>
                </li>
                <li>
                <Badge bg="danger">zz</Badge>
                <div>{movie?.release_date}</div>
                </li>
                <li>
                <Badge bg="danger">zz</Badge>
                <div>{movie?.runtime}</div>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      <section></section>
    </div>
  );
};

export default MovieDetail;
