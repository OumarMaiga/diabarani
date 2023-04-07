
  
  const initialState = {  favoritesEpisode: [], loading: true };

export default (state = initialState, action) => {
  const { type, payload } = action;
  let nextState;
  switch (type) {
    case "TOGGLE_FAVORITE_EPISODE":
      const favoriteEpisodeIndex = state.favoritesEpisode.findIndex(item => item.id === payload.id)
      if (favoriteEpisodeIndex !== -1)
      {
        // On supprime la episode des favories
        nextState = {
          ...state,
          favoritesEpisode: state.favoritesEpisode.filter((item, index) => index !== favoriteEpisodeIndex),
          loading: false
        }
      }
      else
      {
        // On ajoute la episode des favories
        nextState = {
          ...state,
          favoritesEpisode: [...state.favoritesEpisode, payload],
          loading: false
        }
      }
      return nextState || state;
    default:
      return state;
  }
};
