import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div``;
const Nav = styled.nav``;
const Header = styled.h2``;

class CoinPage extends React.Component {
  render() {
    return (
      <Container>
        <Nav>
          <Link index to="/">
            Coin
          </Link>
        </Nav>
        <Header>Coin</Header>
      </Container>
    );
  }
}

export default CoinPage;
