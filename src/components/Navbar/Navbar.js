import React, { useState } from "react";
import { ReactComponent as DarkSearchIcon } from "./Icons/DarkSearchIcon.svg";
import { ReactComponent as LightSearchIcon } from "./Icons/LightSearchIcon.svg";
import { ReactComponent as DownArrow } from "./Icons/DownArrow.svg";
import {
  Nav,
  NavLink,
  StyledSelect,
  StyledOption,
  Container,
  StyledThemeButton,
  StyledSearchIcon,
  StyledInput,
  Button,
  StyledDarkIcon,
  StyledLightIcon,
  StyledDownArrow,
  StyledCurrencyIcon,
  Circle,
} from "./navbar.styled";

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
        <StyledSearchIcon>
          {props.theme ? <DarkSearchIcon /> : <LightSearchIcon />}
        </StyledSearchIcon>
        <Container>
          <StyledInput type="text" placeholder="Search..." />
        </Container>
        <Circle />
        <StyledCurrencyIcon>$</StyledCurrencyIcon>
        <StyledDownArrow>
          <DownArrow />
        </StyledDownArrow>
        <StyledSelect>
          <StyledOption value="1">USD</StyledOption>
        </StyledSelect>
        <StyledThemeButton>
          <Button onClick={props.handleTheme}>
            {props.theme ? <StyledDarkIcon /> : <StyledLightIcon />}
          </Button>
        </StyledThemeButton>
      </Nav>
    </div>
  );
};

export default Navbar;
