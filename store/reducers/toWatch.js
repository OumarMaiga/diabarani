
  
const initialState = { towatchsFilm: [], loading: true };

export default (state = initialState, action) => {
  const { type, payload } = action;
  let nextState;
  switch (type) {
    case "TOGGLE_TOWATCH":
      const toWatchFilmIndex = state.towatchsFilm.findIndex(item => item.id === payload.id)
      if (toWatchFilmIndex !== -1)
      {
        // On supprime le film des favories
        nextState = {
          ...state,
          towatchsFilm: state.towatchsFilm.filter((item, index) => index !== toWatchFilmIndex),
          loading: false
        }
      }
      else
      {
        // On ajoute le film des favories
        nextState = {
          ...state,
          towatchsFilm: [...state.towatchsFilm, payload],
          loading: false
        }
      }
      return nextState || state;
    default:
      return state;
  }
};
