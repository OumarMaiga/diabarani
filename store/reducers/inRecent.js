
  
const initialState = { inRecentsFilm: [], loading: true };

export default (state = initialState, action) => {
  const { type, payload } = action;
  let nextState;
  switch (type) {
    case "ADD_INRECENT":
      console.log("ADD_INRECENT");
      const inRecentFilmIndex = state.inRecentsFilm.findIndex(item => item.id === payload.id);
      if (inRecentFilmIndex !== -1)
      {
        console.log("DELETE");
        // On supprime le film dans l'historique
        nextState = {
          ...state,
          inRecentsFilm: state.inRecentsFilm.filter((item, index) => index !== inRecentFilmIndex),
          //inRecentsFilm: [...state.inRecentsFilm, state.inRecentsFilm.unshift(state.inRecentsFilm.splice(state.inRecentsFilm.findIndex(item => item.id === inRecentFilmIndex), 1)[0])],
          loading: false
        }
        
      }
      console.log("ADD");
      // On ajoute le film dans l'historique
      nextState = {
        ...state,
        // inRecentsFilm: state.inRecentsFilm.unshift(payload),
        inRecentsFilm: [...state.inRecentsFilm, state.inRecentsFilm.unshift(payload)],
        loading: false
      }
      
      return nextState || state;
    default:
      return state;
  }
};
