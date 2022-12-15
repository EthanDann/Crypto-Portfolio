import styled from "styled-components";
import { ReactComponent as PlusIcon } from "./Plus.svg";
import { ReactComponent as UpArrow } from "./UpArrow.svg";
import { ReactComponent as DownArrow } from "./DownArrow.svg";
import { ReactComponent as LinkIcon } from "./LinkIcon.svg";

const StyledDiv = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.main};
  flex-direction: column;
  border-radius: 12px;
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
export const TopPageContent = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 80%;
  margin: 0 auto;
  @media (min-width: 1024px) {
    margin-top: 2em;
    max-width: 100%;
  }
`;
export const BottomPageContent = styled.div`
  max-width: 80%;
  margin: 0 auto;
  @media (min-width: 1024px) {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    margin-top: 2em;
    max-width: 100%;
  }
`;
export const LeftContent = styled(StyledDiv)`
  padding: ${(props) => props.padding};
  margin: 0 0 1em 0;
  @media (min-width: 1024px) {
    width: 35%;
  }
`;
export const MiddleContent = styled(StyledDiv)`
  height: 300px;
  justify-content: space-around;
  padding: 0.7em 5em;
  margin: 0 0.5em 0 -0.5em;
  @media (min-width: 1024px) {
    width: 30%;
  }
`;
export const RightContent = styled(StyledDiv)`
  height: 293px;
  align-items: flex-start;
  justify-content: space-around;
  font-weight: bold;
  padding: 1em 2em;
  margin: 0 2em;
  margin-right: 0;
  @media (min-width: 1024px) {
    width: 50%;
  }
`;
export const Container = styled.div`
  background-color: ${(props) => props.theme.secondary};
  @media (min-width: 768px) {
    padding: 1em 2em;
  }
  @media (min-width: 1024px) {
    margin: auto;
    margin-bottom: 5em;
    padding: 1em 5em;
    max-width: 1630px;
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
export const DescriptionContainer = styled.div`
  font-size: 0.8rem;
  padding: 3em 2em;
  background: ${(props) => props.theme.main};
  border-radius: 12px;
  margin-bottom: 1em;
  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;
export const CoinLinksContainer = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.5em;
    & > div {
      width: 32.5%;
    }
  }
`;
export const Header = styled.h1`
  text-align: start;
  font-weight: 400;
  margin-bottom: 1.8em;
  font-size: 1rem;
  margin-top: 1em;
`;
export const ImageContainer = styled.div`
  background: ${(props) => props.theme.secondary};
  padding: 1.5em;
  border-radius: 12px;
  margin-bottom: 0;
  width: 40%;
`;
export const Image = styled.img`
  object-fit: cover;
  width: 100%;
`;
export const Anchor = styled.a`
  background-color: ${(props) => props.theme.main};
  color: ${(props) => props.theme.fontColor};
  text-decoration: none;
`;
export const Text = styled.div`
  display: flex;
  font-size: ${(props) => props.fontSize}px;
  flex-direction: ${(props) => props.direction};
  justify-content: center;
  align-items: center;
`;
export const PercentDiv = styled.div`
  margin: 5px;
  color: ${({ type }) =>
    type === "true" ? "rgb(254, 16, 64)" : "rgb(0, 252, 42)"};
  font-size: 20px;
`;

export const StyledPlusIcon = styled(PlusIcon)`
  margin-right: 10px;
`;
export const StyledUpArrow = styled(UpArrow)`
  margin-right: 10px;
`;
export const StyledDownArrow = styled(DownArrow)`
  margin-right: 10px;
`;
export const StyledLinkIcon = styled(LinkIcon)`
  position: absolute;
  left: 100px;
  margin-right: 10px;
`;
