import api from "../api";



const API_KEY = process.env.REACT_APP_API_KEY;
function getMovies() {
    return async (dispatch) => {
        try{ dispatch({type:"BEFORE/GET/MOVIES"})
        const popularMovieApi = api.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
        const topRatedApi = api.get(`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
        const upcomingApi = api.get(`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);
        const genreApi = api.get(`/genre/movie/list?api_key=${API_KEY}&language=en-US`)
        let [popularMovies, topRatedMovies, upcomingMovies,genreList] = await Promise.all([popularMovieApi, topRatedApi, upcomingApi, genreApi])
        
        dispatch({
            type: "GET/MOVIES", 
            payload: {
                popularMovies: popularMovies.data,
                topRatedMovies: topRatedMovies.data,
                upcomingMovies: upcomingMovies.data,
                genreList: genreList.data.genres
            }
        })}catch(error){
            dispatch({type:"GET/MOVIES/ERROR"})
        }
       
    }
}
function getQuery(query){
    return(dispatch) =>{
        dispatch({type:"SAVE/QUERY",payload:{query}})
    }
}

export const movieAction = {
    getMovies,getQuery
}