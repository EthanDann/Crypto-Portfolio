import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  margin: 0 1em;
  @media (min-width: 768px) {
    margin: 0 1em;
    display: flex;
    flex-direction: column;
    margin-top: 2em;
    max-width: 100%;
  }
`;
export const Header = styled.h1`
  text-align: start;
  font-weight: 400;
  margin-bottom: 1.8em;
  font-size: 1.5rem;
  margin: 1em;
`;
export const DescriptionContainer = styled.div`
  font-size: 0.8rem;
  margin-bottom: 1rem;
  padding: 3em 2em;
  background: ${(props) => props.theme.main};
  border-radius: 12px;
  margin-bottom: 1em;
  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;
export const Description = styled.p`
  & a {
    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
      text-decoration: none;
      color: rgb(30, 130, 225);
    }
  }
  margin-bottom: 0.2em;
`;
export const CoinLinksContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.5em;
    & > div {
      width: 32.5%;
    }
  }
`;
export const Link = styled.div``;
