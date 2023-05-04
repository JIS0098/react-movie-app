import React,{useEffect} from 'react'
import { movieAction } from '../redux/actions/movieAction' // 액션을 가져올려면 디스패치 필요하다!!
import { useDispatch } from 'react-redux'


const Home = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(movieAction.getMovies());
  },[])
  return (
    <div>
      Home
    </div>
  )
}

export default Home
