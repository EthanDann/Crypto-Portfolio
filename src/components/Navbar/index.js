import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as DarkIcon } from "./DarkIcon.svg";
import { ReactComponent as LightIcon } from "./LightIcon.svg";
import { ReactComponent as SearchIcon } from "./SearchIcon.svg";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.main};
  transition: ${(props) => props.theme.transition};
`;
const NavLink = styled(Link)`
  background-color: ${(props) => props.theme.main};
  transition: ${(props) => props.theme.transition};
  border-radius: 10px;
  margin: 1rem;
  padding: 1rem;
  text-decoration: none;
  color: ${(props) => props.theme.fontColor};
  &:hover,
  &.active {
    background-color: ${(props) => props.theme.secondary};
    cursor: pointer;
  }
`;
const Container = styled.div`
  display: flex;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 2.45%;
  left: 42.5%;
  background-color: ${(props) => props.theme.secondary};
  transition: ${(props) => props.theme.transition};
  height: 2.95rem;
  width: 4rem;
`;
const StyledIinput = styled.input`
  background-color: ${(props) => props.theme.secondary};
  transition: ${(props) => props.theme.transition};
  color: ${(props) => props.theme.fontColor};
  border: none;
  border-radius: 10px;
  margin: 1.1rem;
  width: 30%;
  padding: 0.8rem;
  font-size: 1.1rem;
  &::placeholder {
    color: ${(props) => props.theme.fontColor};
  }
  &:focus {
    outline: none;
  }
`;
const Button = styled.button`
  border: none;
  width: 5rem;
  height: auto;
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
`;
const StyledDarkIcon = styled(DarkIcon)`
  border-radius: 10px;
  width: 60%;
  height: auto;
  padding: 0.3rem;
  background-color: #1e2128;
`;
const StyledLightIcon = styled(LightIcon)`
  border-radius: 10px;
  width: 60%;
  height: auto;
  padding: 0.3rem;
  background-color: #f7f7f7;
`;
const Navbar = (props) => {
  const [links] = useState([
    {
      id: 1,
      name: "Coins",
      path: "/",
    },
    {
      id: 2,
      name: "Portfolio",
      path: "/Portfolio",
    },
  ]);
  const [activeItem, setActiveItem] = useState(1);
  return (
    <div>
      <Nav>
        {links.map((element) => {
          return (
            <NavLink
              className={activeItem === element.id ? "active" : "inactive"}
              to={element.path}
              key={element.id}
              onClick={() => setActiveItem(element.id)}
            >
              {element.name}
            </NavLink>
          );
        })}
        <Container>
          <SearchIcon />
        </Container>
        <StyledIinput type="text" placeholder="Search..." />
        <Button onClick={props.handleTheme}>
          {props.theme === "dark" ? <StyledDarkIcon /> : <StyledLightIcon />}
        </Button>
      </Nav>
    </div>
  );
};

export default Navbar;
