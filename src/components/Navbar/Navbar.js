import React, { useState } from "react";
import { ReactComponent as DarkSearchIcon } from "./Icons/DarkSearchIcon.svg";
import { ReactComponent as LightSearchIcon } from "./Icons/LightSearchIcon.svg";
import { CurrencyToggle } from "components";
import {
  Nav,
  NavLink,
  Container,
  SearchContainer,
  StyledSearchIcon,
  StyledInput,
  Button,
  ThemeContainer,
  StyledDarkIcon,
  StyledLightIcon,
} from "./navbar.styled";

const Navbar = (props) => {
  const [links] = useState([
    {
      id: 1,
      name: "Coins",
      path: "/",
      order: 1,
    },
    {
      id: 2,
      name: "Portfolio",
      path: "/Portfolio",
      order: 2,
    },
  ]);
  const [activeItem, setActiveItem] = useState(1);
  return (
    <Nav>
      <Container>
        {links.map((element) => {
          return (
            <NavLink
              className={activeItem === element.id ? "active" : "inactive"}
              to={element.path}
              key={element.id}
              onClick={() => setActiveItem(element.id)}
              order={element.order}
            >
              {element.name}
            </NavLink>
          );
        })}
        <SearchContainer>
          <StyledSearchIcon>
            {props.theme ? <DarkSearchIcon /> : <LightSearchIcon />}
          </StyledSearchIcon>
          <StyledInput type="text" placeholder="Search..." />
        </SearchContainer>
        <CurrencyToggle />
        <ThemeContainer>
          <Button onClick={props.handleTheme}>
            {props.theme ? <StyledDarkIcon /> : <StyledLightIcon />}
          </Button>
        </ThemeContainer>
      </Container>
    </Nav>
  );
};

export default Navbar;
