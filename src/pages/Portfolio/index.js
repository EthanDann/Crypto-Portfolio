import React from "react";
import styled from "styled-components";
import { Sparkline } from "../../components/Sparkline";
const StyledDiv = styled.div`
  display: flex;
  color: black;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: auto;
  margin: auto;
  border: 1px solid gray;
`;
class Portfolio extends React.Component {
  state = {
    theme: "dark",
  };
  render() {
    const { list, isLoading, hasError } = this.props;
    const HasCoin = !this.props.isLoading && this.props.list;
    return (
      <body>
        {isLoading && <span>Fetching all coins...</span>}
        {HasCoin && !hasError && (
          <StyledDiv>
            {list.map((coin, id) => {
              return (
                <StyledDiv key={id}>
                  Data: {coin.sparkline_in_7d.price}
                </StyledDiv>
              );
            })}
          </StyledDiv>
        )}
        {hasError && <span>There was an error.</span>}
      </body>
    );
  }
}

export default Portfolio;
