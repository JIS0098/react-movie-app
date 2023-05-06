import api from "../api";
import {movieActions} from "../reducers/movieReducer"


const API_KEY =process.env.REACT_APP_API_KEY;
function getMovies(){
    return async(dispatch)=>{
    const popularMovieApi = api.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
    const topRatedApi =  api.get(`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
    const upcomingApi =  api.get(`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);

    let [popularMovies,topRatedMovies,upcomingMovies]=await Promise.all([popularMovieApi,topRatedApi,upcomingApi])

    dispatch(movieActions.getMovies({popularMovies,topRatedMovies,upcomingMovies}))
    }
}

export const movieAction = {
    getMovies}