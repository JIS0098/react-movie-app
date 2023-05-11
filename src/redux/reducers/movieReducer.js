let initialState = {
  popularMovies: {},
  topRatedMovies: {},
  upcomingMovies: {},
  genreList:{},
  loading: true,
};

function movieReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "BEFORE/GET/MOVIES":
        return {...state,loading:true}
    case "GET/MOVIES":
      return {
        ...state,
        popularMovies: payload.popularMovies,
        topRatedMovies: payload.topRatedMovies,
        upcomingMovies: payload.upcomingMovies,
        genreList: payload.genreList,
        loading:false
      };
    case "GET/MOVIES/ERROR":
        return {...state,loading:true}
      default: return {...state}

  } 
}

export default movieReducer;
