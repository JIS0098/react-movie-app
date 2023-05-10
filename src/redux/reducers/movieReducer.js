let initialState = {
  popularMovies: {},
  topRatedMovies: {},
  upcomingMovies: {},
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
        loading:false
      };
    case "GET/MOVIES/ERROR":
        return {...state,loading:true}
      default: return {...state}
  } 
}

export default movieReducer;
