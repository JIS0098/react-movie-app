import {createSlice} from "@reduxjs/toolkit";


let initialState = {
  popularMovies: {},
  topRatedMovies: {},
  upcomingMovies: {},
};


const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers : {
        getMovies(state, action){
            state.popularMovies = action.payload.popularMovieApi;
            state.topRatedMovies = action.payload.topRatedApi;
            state.upcomingMovies = action.payload.upcomingApi;
        }
    }
})

export default movieSlice.reducer;
export const movieActions = movieSlice.actions;