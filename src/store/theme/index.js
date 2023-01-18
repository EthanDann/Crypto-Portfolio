const intitialState = {
  activeTheme: "dark",
};

export const TOGGLE_THEME = "TOGGLE_THEME";

const themeReducer = (state = intitialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        activeTheme: action.payload,
      };
    default:
      return state;
  }
};

export default themeReducer;
