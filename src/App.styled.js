import styled from "styled-components";

export const Container = styled.div`
  color: ${(props) => props.theme.fontColor};
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
