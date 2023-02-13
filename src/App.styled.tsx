import styled, { createGlobalStyle } from "styled-components";

export const Container = styled.div<{ width: number; theme: string }>`
  color: ${({ theme }) => theme.fontColor};
  width: ${({ width }) => width}px;
`;
export const darkTheme = {
  main: "rgba(24,27,31,255)",
  secondary: "rgba(30,33,40,255)",
  fontColor: "rgba(255,255,255,255)",
  imageBackgroundColor: "rgba(247,247,247,255)",
  transition: "background-color 500ms linear",
};
export const lightTheme = {
  main: "rgba(255,255,255, 255)",
  secondary: "rgba(247,247,247,255)",
  fontColor: "rgba(24,27,31,255)",
  imageBackgroundColor: "rgba(30,33,40,255)",
  transition: "background-color 500ms linear",
};
export const GlobalStyle = createGlobalStyle`
body,html {
  margin: 0 ;
  font-family: 'Poppins', sans-serif;
}`;
