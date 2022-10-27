
  
const initialState = { inRecentsFilm: [], loading: true };

export default (state = initialState, action) => {
  const { type, payload } = action;
  let nextState;
  switch (type) {
    case "ADD_INRECENT":
      const inRecentFilmIndex = state.inRecentsFilm.findIndex(item => item.id === payload.id)
      if (inRecentFilmIndex !== -1)
      {
        // On supprime le film des favories
        nextState = {
          ...state,
          inRecentsFilm: state.inRecentsFilm.filter((item, index) => index !== inRecentFilmIndex),
          loading: false
        }
      }
      
      // On ajoute le film des favories
      nextState = {
        ...state,
        inRecentsFilm: [...state.inRecentsFilm, payload],
        loading: false
      }
      return nextState || state;
    default:
      return state;
  }
};
