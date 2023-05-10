import api from "../api";
import { ClipLoader } from "react-spinners/ClipLoader";


const API_KEY = process.env.REACT_APP_API_KEY;
function getMovies() {
    return async (dispatch) => {
        try{ dispatch({type:"BEFORE/GET/MOVIES"})
        const popularMovieApi = api.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
        const topRatedApi = api.get(`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
        const upcomingApi = api.get(`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);
        let [popularMovies, topRatedMovies, upcomingMovies] = await Promise.all([popularMovieApi, topRatedApi, upcomingApi])

        dispatch({
            type: "GET/MOVIES", 
            payload: {
                popularMovies: popularMovies.data,
                topRatedMovies: topRatedMovies.data,
                upcomingMovies: upcomingMovies.data
            }
        })}catch(error){
            dispatch({type:"GET/MOVIES/ERROR"})
        }
       
    }
}

export const movieAction = {
    getMovies
}