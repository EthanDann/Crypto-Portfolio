import { CurrencyToggle, SearchInput, LogoutButton } from "components";
import {
  Nav,
  StyledLink,
  Container,
  Button,
  ThemeContainer,
  StyledThemeIcon,
} from "./navbar.styled";

function Navbar(props) {
  const { handleTheme, theme } = props;
  return (
    <Nav>
      <Container>
        <StyledLink to="/" order={1}>
          Coins
        </StyledLink>
        <StyledLink to="/Portfolio" order={2}>
          Portfolio
        </StyledLink>
        <SearchInput icon />
        <CurrencyToggle />
        <LogoutButton />
        <ThemeContainer>
          <Button onClick={handleTheme}>
            <StyledThemeIcon />
          </Button>
        </ThemeContainer>
      </Container>
    </Nav>
  );
}

export default Navbar;
