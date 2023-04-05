
  
  const initialState = {  favoritesFilm: [], favoritesEpisode: [], favoritesSerie: [], loading: true };

export default (state = initialState, action) => {
  const { type, payload } = action;
  let nextState;
  switch (type) {
    case "TOGGLE_FAVORITE_FILM":
      const favoriteFilmIndex = state.favoritesFilm.findIndex(item => item.id === payload.id)
      if (favoriteFilmIndex !== -1)
      {
        // On supprime le film des favories
        nextState = {
          ...state,
          favoritesFilm: state.favoritesFilm.filter((item, index) => index !== favoriteFilmIndex),
          loading: false
        }
      }
      else
      {
        // On ajoute le film des favories
        nextState = {
          ...state,
          favoritesFilm: [...state.favoritesFilm, payload],
          loading: false
        }
      }
      return nextState || state;
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
