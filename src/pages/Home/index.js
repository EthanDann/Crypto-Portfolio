import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Nav = styled.nav``;
const CoinList = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 1.5rem;
  margin: 1rem;
`;
const Image = styled.img`
  margin: 0.5rem;
  width: 3%;
  height: auto;
`;
class Home extends React.Component {
  render() {
    const { list } = this.props;
    const HasError = this.props.hasError;
    return (
      <Container>
        <Nav>
          <Link to="/Coin">Coin</Link>
        </Nav>
        <div>
          {list.map((coin) => {
            return (
              <CoinList key={coin.id}>
                <Image src={coin.image} alt={coin.name} />
                <span>
                  {coin.symbol.toUpperCase()} - {coin.name}{" "}
                </span>
              </CoinList>
            );
          })}
        </div>
        {HasError && <span>There was an error.</span>}
      </Container>
    );
  }
}

export default Home;
