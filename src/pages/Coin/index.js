import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div``;
const Nav = styled.nav``;
const Header = styled.h2``;

class Coin extends React.Component {
  render() {
    return (
      <Container>
        <Nav>
          <Link index to="/">
            Home
          </Link>
        </Nav>
        <Header>Coin</Header>
      </Container>
    );
  }
}

export default Coin;
