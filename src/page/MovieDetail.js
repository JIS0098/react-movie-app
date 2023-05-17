import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "../css/detail.css";
import Badge from "react-bootstrap/Badge";
import api from "../redux/api";

const API_KEY = process.env.REACT_APP_API_KEY;

const MovieDetail = () => {
  // 장르 데이타 가져오기
  // 장르 
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [reviews ,setReviews] = useState([]);
  const getMoviesDetail = async () => {
    let detailApi = await api.get(`/movie/${id}?api_key=${API_KEY}&language=en-US`);
    let detailData = detailApi.data;
    let reviewsApi = await api.get(`/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`);
    let reviews = reviewsApi.data
    setMovie(detailData)
    setReviews(reviews)
  };

  console.log(movie.genres)
  console.log(reviews)
  useEffect(() => {
    getMoviesDetail();
  }, []);

  return (
    <div className="detail-area">
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
      <section >
        <Container className="container">
          <Row className="screen-top">
            <Col className="movie-left-page" lg={6}>
              <img src={`https://www.themoviedb.org/t/p/original/${movie.poster_path}`} />
            </Col>
            <Col className="movie-right-page" lg={6}>
              <div className="movie-area" >
                <ul className="movie-genres">
                  {movie.genres && movie.genres.map((item) => (<li><Badge className="badge" bg="danger"><div>{item.name}</div></Badge></li>))}
                </ul>
                <h1>{movie?.title}</h1>
                <div className="movie-info">
                  <ul className="info1">
                    <li>{movie?.vote_average}</li>
                    <li>{movie?.popularity}</li>
                    <li>{movie.adult ? "" : "Under 18"}</li>
                  </ul>
                  <div className="white-line">
                    <div className="movie-overview"><p>{movie?.overview}</p></div>
                    <div className="info2">
                      <ul className="info2-list">
                        <li>
                          <Badge bg="danger"><div>Budget</div></Badge>
                          <div>${movie?.budget}</div>
                        </li>
                        <li>
                          <Badge bg="danger"><div>Revenue</div></Badge>
                          <div>${movie?.revenue}</div>
                        </li>
                        <li>
                          <Badge bg="danger"><div>Release Day</div></Badge>
                          <div>{movie?.release_date}</div>
                        </li>
                        <li>
                          <Badge bg="danger"><div>Time</div></Badge>
                          <div>{movie?.runtime}</div>
                        </li>
                      </ul>
                    </div>
                  </div>

                </div>
                <div className="movie-warning">
                  Watch Trailer
                </div>
                <div className="movie-like">
                  ♥
                </div>
              </div>
            </Col>
          </Row>
          <Row className="screen-bottom">
            <Col lg={12}>
              <div className="review-nav">
                <button>REVIEWS (5)</button>
                <button>RELATED MOVIES (20)</button>
              </div>
              <div className="review-list">
                <ul> 
                {/*reviews && reviews.results.find((review)=>(<li className="review"><h4>{review?.author}</h4><p>{review?.content}</p></li>))*/}
                </ul>
               
              </div>

            </Col>
          </Row>
        </Container>
      </section>

    </div>
  );
};

export default MovieDetail;
