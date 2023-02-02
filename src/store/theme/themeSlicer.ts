import { createSlice } from "@reduxjs/toolkit";

const initialState: string = "dark";

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    handleTheme: (state, _) => (state === "dark" ? "light" : "dark"),
  },
});

export const { handleTheme } = themeSlice.actions;
export default themeSlice.reducer;
