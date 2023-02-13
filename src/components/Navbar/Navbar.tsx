import { useAuth0 } from "@auth0/auth0-react";
import { handleTheme } from "store/theme/themeSlicer";
import { useAppDispatch } from "store/hooks";

import {
  CurrencyToggle,
  SearchInput,
  AuthenticationButton,
  LogoutButton,
} from "components";
import {
  Nav,
  StyledLink,
  Container,
  Button,
  ThemeContainer,
  StyledThemeIcon,
} from "./navbar.styled";

const Navbar: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isAuthenticated } = useAuth0();
  return (
    <Nav>
      <Container>
        <StyledLink to="/">Coins</StyledLink>
        <StyledLink to="/Portfolio">Portfolio</StyledLink>
        <SearchInput />
        <CurrencyToggle />
        <AuthenticationButton />
        <ThemeContainer>
          <Button onClick={() => dispatch(handleTheme(null))}>
            <StyledThemeIcon />
          </Button>
        </ThemeContainer>
      </Container>
    </Nav>
  );
};

export default Navbar;
