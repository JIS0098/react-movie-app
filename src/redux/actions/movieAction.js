import api from "../api";


const API_KEY =process.env.REACT_APP_API_KEY;
function getMovies(){
    return async(dispatch)=>{
    const popularMovieApi = await api.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
    //get()=> http 함수이며 어떤 액션을 하고싶은지 써주는 역할이다.

        // let url ="https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1"
        // let response = await fetch(url);
        // let data = await response.json();

        // let url2 ="https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1"
        // let response2 = await fetch(url);
        // let data2 = await response.json();

        // let url3 ="https://api.themoviedb.org/3/movie/upcoming?api_key=<<api_key>>&language=en-US&page=1"
        // let response3 = await fetch(url);
        // let data3 = await response.json();
    }
}

export const movieAction = {
    getMovies,
}