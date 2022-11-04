import React from "react";
import styled, { ThemeProvider } from "styled-components";

const darkTheme = {
  main: "rgba(24,27,31,255)",
  secondary: "rgba(30,33,40,255)",
};

const lightTheme = {
  main: "rgba(255,255,255, 255)",
  secondary: "rgba(247,247,247,255)",
};

const Body = styled.body`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.secondary};
`;

const Container = styled.div`
  padding: 5rem;
  border-radius: 7px;
`;

const CoinContainer = styled.div`
  padding: 1rem;
  border-radius: 7px;
  background-color: ${(props) => props.theme.main};
`;
const Coin = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.5rem;
  margin: 0;
  padding: 1rem;
  color: #fff;
  background-color: ${(props) => props.theme.main};
`;

const Line = styled.div`
  display: flex;
  width: 100%;
  border: 0.5px solid rgba(255, 255, 255, 0.3);
`;
const Image = styled.img`
  margin: 0.5rem;
  width: 3%;
`;
class CoinList extends React.Component {
  state = {
    theme: "dark",
  };

  render() {
    const { list, isLoading, hasError } = this.props;
    const HasCoin = !this.props.isLoading && this.props.list;

    return (
      <ThemeProvider
        theme={this.state.theme === "dark" ? darkTheme : lightTheme}
      >
        <Body>
          <Container>
            {isLoading && <span>Fetching all coins...</span>}
            {HasCoin && !hasError && (
              <CoinContainer>
                {list.map((coin) => {
                  return (
                    <div>
                      <Coin key={coin.id}>
                        <Image src={coin.image} alt={coin.name} />
                        <span>
                          {coin.symbol.toUpperCase()} - {coin.name}{" "}
                        </span>
                      </Coin>
                      <Line />
                    </div>
                  );
                })}
              </CoinContainer>
            )}
            {hasError && <span>There was an error.</span>}
          </Container>
        </Body>
      </ThemeProvider>
    );
  }
}

export default CoinList;
