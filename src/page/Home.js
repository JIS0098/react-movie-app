import React,{useEffect} from 'react'
import { movieAction } from '../redux/actions/movieAction' // 액션을 가져올려면 디스패치 필요하다!!
import { useDispatch, useSelector } from 'react-redux'
import Banner from '../components/Banner';


const Home = () => {
  const {popularMovies,topRatedMovies,upcomingMovies} = useSelector(state => state.movie);
  const dispatch = useDispatch();
  console.log("인기",popularMovies);
  useEffect(()=>{
    dispatch(movieAction.getMovies());
  },[])
  return (
    <div>
   
    </div>
  )
}

export default Home
