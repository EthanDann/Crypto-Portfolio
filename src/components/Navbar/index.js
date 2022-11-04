import React from "react";
import { Link } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { ReactComponent as Icon } from "./ThemeIcon.svg";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.main};
`;

const NavLink = styled(Link)`
  background-color: ${(props) => props.theme.main};
  padding: 1rem;
  text-decoration: none;
  &:hover {
    background-color: ${(props) => props.theme.secondary};
  }
`;
const darkTheme = {
  main: "rgba(24,27,31,255)",
  secondary: "rgba(30,33,40,255)",
};

const lightTheme = {
  main: "rgba(255,255,255, 255)",
  secondary: "rgba(247,247,247,255)",
};
class Navbar extends React.Component {
  state = {
    theme: "dark",
  };
  handleTheme = () => {
    this.state.theme === "dark"
      ? this.setState({ theme: "light" })
      : this.setState({ theme: "dark" });
  };

  render() {
    return (
      <ThemeProvider
        theme={this.state.theme === "dark" ? darkTheme : lightTheme}
      >
        <div>
          <Nav>
            <NavLink to="/">Coins</NavLink>
            <NavLink to="/Portfolio">Portfolio</NavLink>
            <button onClick={this.handleTheme}>
              <Icon />
            </button>
          </Nav>
        </div>
      </ThemeProvider>
    );
  }
}

export default Navbar;
