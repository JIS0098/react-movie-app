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
            state.popularMovies = action.payload.popularMovies;
            state.topRatedMovies = action.payload.topRatedMovies;
            state.upcomingMovies = action.payload.upcomingMovies;
        }
    }
})

export default movieSlice.reducer;
export const movieActions = movieSlice.actions;