
  
const initialState = { inRecentsFilm: [], loading: true };

export default (state = initialState, action) => {
  const { type, payload } = action;
  let nextState;
  switch (type) {
    case "ADD_INRECENT":
      console.log("INRECENT_REDUCER");
      const inRecentFilmIndex = state.inRecentsFilm.findIndex(item => item.id === payload.id);
      if (inRecentFilmIndex !== -1)
      {
        arr = state.inRecentsFilm;
        const toIndex = 0;
        // On recupere l'element a travers son index
        const element = arr.splice(inRecentFilmIndex, 1)[0];
        // On change la place de l'element
        arr.splice(toIndex, 0, element);
        // On applique la nouvelle array
        nextState = {
          ...state,
          inRecentsFilm: arr,
          loading: false
        }
        
      }
      else
      {
        // On ajoute le film dans l'historique
        nextState = {
          ...state,
          inRecentsFilm: [payload, ...state.inRecentsFilm],
          loading: false
        }
      }
      
      return nextState || state;
    default:
      return state;
  }
};
