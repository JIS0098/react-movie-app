import {createSlice} from "@reduxjs/toolkit";


let initialState = {
  popularMovies: {},
  topRatedMovies: {},
  upcomingMovies: {},
  loading:true
};


const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers : {
        
        getMovies(state, action){
            state.popularMovies = action.payload.popularMovies;
            state.topRatedMovies = action.payload.topRatedMovies;
            state.upcomingMovies = action.payload.upcomingMovies;
            state.loading = false
        }
    }
    
})

export default movieSlice.reducer;
export const movieActions = movieSlice.actions;