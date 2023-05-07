import api from "../api";
import {movieActions} from "../reducers/movieReducer";
import {ClipLoader } from "react-spinners/ClipLoader";


const API_KEY =process.env.REACT_APP_API_KEY;
function getMovies(){
    return async(dispatch)=>{
        try{ // 에러가 생기면 캐치로 던질때 트라이 캐치문 사용 
            const popularMovieApi = api.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
            const topRatedApi =  api.get(`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
            const upcomingApi =  api.get(`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);
            let [popularMovies,topRatedMovies,upcomingMovies]=await Promise.all([popularMovieApi,topRatedApi,upcomingApi])
        
            dispatch(movieActions.getMovies({
                popularMovies:popularMovies.data,
                topRatedMovies:topRatedMovies.data,
                upcomingMovies:upcomingMovies.data}))
        }catch(error){/*에러핸들링 하는곳*/}
   
    }
}

export const movieAction = {
    getMovies}