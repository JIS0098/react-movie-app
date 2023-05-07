import React from "react";

const Banner = ({ movie }) => {
  return (
    <div className="banner" style={{backgroundImage:"url(" + ` https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie.poster_path}` + ")"}}>
      <div className="banner-info">
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};
//es최신버전은 style을 줄떄 스트링 타입으로 바꿔야 인식된다.
//변수가 들어갈곳은 백틱을 써줘야하므로 ""으로 한번에 감싸지 못한다.
export default Banner;
