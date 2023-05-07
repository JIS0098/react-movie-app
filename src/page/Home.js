import React,{useEffect} from 'react'
import { movieAction } from '../redux/actions/movieAction'
import { useDispatch, useSelector } from 'react-redux'
import Banner from '../components/Banner';
import MovieSlide from '../components/MovieSlide';
import {ClipLoader } from "react-spinners/ClipLoader"; //영화가 도착하기전 보여줄거다. 로딩스피너

const Home = () => {
  const {popularMovies,topRatedMovies,upcomingMovies} = useSelector(state => state.movie);
  const dispatch = useDispatch();
  console.log("인기",popularMovies);
  useEffect(()=>{
    dispatch(movieAction.getMovies());
    dispatch(ClipLoader.loading={loading});
  },[])
  if(loading) return <ClipLoader color="#ffff" loading={loading} cssOverride={override} size={150}/>
  //로딩이 true면 로딩스피너를 보여주고 =>데이터 도착전
  //로딩이 false면 데이터를 보여주고 =>데이터 도착후 or 에러났을때
  return (
    <div>

   {popularMovies.results && <Banner movie = {popularMovies.results[0]}/>} 
   {/* 랜더링전에는 results가 오지않아서 에러가뜸으로 조건부 랜더링을 해줘야한다 popularMovies.results 가있고 popularMovies.results[0]을 줘*/}
   <div>
    <div >popularMovies</div>
    <MovieSlide movie={popularMovies}/> {/*react-multi-carouse를 이용해 슬라이드 적용*/}
    <div >topRatedMovies</div>
    <MovieSlide movie={topRatedMovies}/>
    <div >upcomingMovies</div>
    <MovieSlide movie={upcomingMovies}/>
   </div>
    </div>
  )
}

export default Home
