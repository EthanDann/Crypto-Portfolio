import { handleTheme } from "store/theme/themeSlicer";
import { useAppDispatch } from "store/hooks";

import { CurrencyToggle, SearchInput, LogoutButton } from "components";
import {
  Nav,
  StyledLink,
  Container,
  Button,
  ThemeContainer,
  StyledThemeIcon,
} from "./navbar.styled";

function Navbar() {
  const dispatch = useAppDispatch();
  return (
    <Nav>
      <Container>
        <StyledLink to="/">Coins</StyledLink>
        <StyledLink to="/Portfolio">Portfolio</StyledLink>
        <SearchInput />
        <CurrencyToggle />
        <LogoutButton />
        <ThemeContainer>
          <Button onClick={() => dispatch(handleTheme(null))}>
            <StyledThemeIcon />
          </Button>
        </ThemeContainer>
      </Container>
    </Nav>
  );
}

export default Navbar;
