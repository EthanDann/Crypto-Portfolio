import { TOGGLE_THEME } from "./index";

export const handleTheme = () => (dispatch, getState) => {
  const state = getState();
  const theme = state.theme.activeTheme === "dark" ? "light" : "dark";
  dispatch({ type: TOGGLE_THEME, payload: theme });
};
