import React, { useState } from "react";
import { ReactComponent as DarkSearchIcon } from "./Icons/DarkSearchIcon.svg";
import { ReactComponent as LightSearchIcon } from "./Icons/LightSearchIcon.svg";
import { CurrencyToggle } from "components";
import {
  Nav,
  StyledLink,
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
  return (
    <Nav>
      <Container>
        <StyledLink to="/" order={1}>
          Coins
        </StyledLink>
        <StyledLink to="/Portfolio" order={2}>
          Portfolio
        </StyledLink>
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
