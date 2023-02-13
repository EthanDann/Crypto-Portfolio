import { handleTheme } from "store/theme/themeSlicer";
import { useAppDispatch } from "store/hooks";
import { CurrencyToggle, SearchInput, AuthenticationButton } from "components";
import {
  Nav,
  StyledLink,
  Container,
  Button,
  ThemeContainer,
  StyledThemeIcon,
  StyledCoinsIcon,
  StyledPortfolioIcon,
  StyledSearchIcon,
} from "./navbar.styled";

const Navbar: React.FC = () => {
  const dispatch = useAppDispatch();
  return (
    <Nav>
      <Container>
        <StyledLink to="/">
          <StyledCoinsIcon />
          Coins
        </StyledLink>
        <StyledLink to="/Portfolio">
          <StyledPortfolioIcon />
          Portfolio
        </StyledLink>
        <StyledLink to="/Search">
          <StyledSearchIcon /> Search
        </StyledLink>
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
