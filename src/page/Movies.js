import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { movieAction } from "../redux/actions/movieAction";
import { ClipLoader } from "react-spinners";
import { Container, Row, Col } from "react-bootstrap";
import MoviesCollectionCard from "../components/MoviesCollectionCard";
import "../css/movie.css";
import { useSearchParams } from "react-router-dom";
import api from "../redux/api";
import {Dropdown,DropdownButton,InputRange} from "react-bootstrap";



const API_KEY = process.env.REACT_APP_API_KEY;

const Movies = () => {
  const { popularMovies, loading } = useSelector((state) => state.movie);
  const [query, setQuery] = useSearchParams("");
  const [list, setList] = useState([]);
  const dispatch = useDispatch();
  console.log("인기", popularMovies);
  let keyword = query.get("q") || "";

  const getSearchMovie = async () => {
    let searchMovieApi = await api.get(
      `/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${keyword}`
    );
    let searchMovie = searchMovieApi.data.results;
    setList(searchMovie);
    console.log("검색데이터", searchMovie);
  };

  useEffect(() => {
    dispatch(movieAction.getMovies());
    getSearchMovie();
    setList(popularMovies.results);
  }, [query]);

  if (loading) {
    return <ClipLoader color="#ffff" loading={loading} size={100} />;
  }

  return (
    <Container>
      <Row>
        <Col lg={4}>
          <div>
            <DropdownButton id="dropdown-item-button" title="Sort">
              <Dropdown.ItemText>Sort Results By</Dropdown.ItemText>
              <DropdownButton id="dropdown-item-button" title="Sort By">
                <Dropdown.Item as="button">None</Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    let copy = [...list];
                    copy.sort((a, b) => b.popularity - a.popularity);
                    setList(copy);
                    popularMovies.results.sort(
                      (a, b) => b.popularity - a.popularity
                    );
                  }}
                  as="button"
                >
                  Popularity(Desc)
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    let copy = [...list];
                    copy.sort((a, b) => a.popularity - b.popularity);
                    setList(copy);
                    popularMovies.results.sort(
                      (a, b) => a.popularity - b.popularity
                    );
                  }}
                  as="button"
                >
                  Popularity(Asc)
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    let copy = [...list];
                    copy.sort((a, b) => b.release_date - a.release_date);
                    setList(copy);
                    popularMovies.results.sort(
                      (a, b) => b.release_date - a.release_date
                    );
                  }}
                  as="button"
                >
                  Release Day(Desc)
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    let copy = [...list];
                    copy.sort((a, b) => a.release_date - b.release_date);
                    setList(copy);
                    popularMovies.results.sort(
                      (a, b) => a.release_date - b.release_date
                    );
                  }}
                  as="button"
                >
                  Release Day(Asc)
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    let copy = [...list];
                    copy.sort((a, b) => b.vote_average - a.vote_average);
                    setList(copy);
                    popularMovies.results.sort(
                      (a, b) => b.vote_average - a.vote_average
                    );
                  }}
                  as="button"
                >
                  Vote(Desc)
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    let copy = [...list];
                    copy.sort((a, b) => a.vote_average - b.vote_average);
                    setList(copy);
                    popularMovies.results.sort(
                      (a, b) => a.vote_average - b.vote_average
                    );
                  }}
                  as="button"
                >
                  Vote(Asc)
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    let copy = [...list];
                    copy.sort((a, b) => b.popularity - a.popularity);
                    setList(copy);
                    popularMovies.results.sort(
                      (a, b) => a.popularity - b.popularity
                    );
                  }}
                  as="button"
                >
                  Revenue(Desc)
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    let copy = [...list];
                    copy.sort((a, b) => b.popularity - a.popularity);
                    setList(copy);
                    popularMovies.results.sort(
                      (a, b) => a.popularity - b.popularity
                    );
                  }}
                  as="button"
                >
                  Revenue(Asc)
                </Dropdown.Item>
              </DropdownButton>
            </DropdownButton>
            <div>
              {/* <InputRange
                maxValue={20}
                minValue={0}
                value={this.state.value}
                onChange={(value) => this.setState({ value })}
              /> */}
            </div>
          </div>
        </Col>
        <Col lg={8}>
          <Row>
            <Col lg={12}>
              <div className="collection-card-list">
                {keyword === ""
                  ? popularMovies.results &&
                    popularMovies.results.map((movie) => (
                      <MoviesCollectionCard movie={movie} />
                    ))
                  : list &&
                    list.map((movie) => <MoviesCollectionCard movie={movie} />)}
              </div>
              <div></div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Movies;
