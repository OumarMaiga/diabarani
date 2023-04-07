
  
  const initialState = {  favoritesSerie: [], loading: true };

export default (state = initialState, action) => {
  const { type, payload } = action;
  let nextState;
  switch (type) {
    case "TOGGLE_FAVORITE_SERIE":
      const favoriteSerieIndex = state.favoritesSerie.findIndex(item => item.id === payload.id)
      if (favoriteSerieIndex !== -1)
      {
        // On supprime la serie des favories
        nextState = {
          ...state,
          favoritesSerie: state.favoritesSerie.filter((item, index) => index !== favoriteSerieIndex),
          loading: false
        }
      }
      else
      {
        // On ajoute la serie des favories
        nextState = {
          ...state,
          favoritesSerie: [...state.favoritesSerie, payload],
          loading: false
        }
      }
      return nextState || state;
    default:
      return state;
  }
};
