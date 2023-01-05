import styled from "styled-components";
import { ReactComponent as PlusIcon } from "./Plus.svg";
import { ReactComponent as UpArrow } from "./UpArrow.svg";
import { ReactComponent as DownArrow } from "./DownArrow.svg";
import { ReactComponent as LinkIcon } from "./LinkIcon.svg";

export const Container = styled.div`
  background-color: ${(props) => props.theme.secondary};
  @media (min-width: 768px) {
    padding: 1em 0 0 0;
  }
  @media (min-width: 1024px) {
    margin: auto;
    margin-bottom: auto;
    padding: 1em 0 0 0;
    max-width: 1630px;
  }
  @media (max-width: 425px) {
    margin: 0;
    margin-bottom: auto;
    padding: 1em 0 0 0;
    max-width: 1630px;
    max-width: 100%;
  }
`;
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
  max-width: 50%;
  margin: 1em;
  @media (min-width: 1024px) {
    margin-top: 2em;
    max-width: 100%;
  }
  @media (max-width: 425px) {
    flex-direction: column;
    margin-left: 7em;
  }
`;
export const BottomPageContent = styled.div`
  max-width: 80%;
  margin: 0;
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
  width: 20%;
  @media (min-width: 1024px) {
    width: 35%;
  }
  @media (max-width: 425px) {
    margin-bottom: -3em;
    background-color: transparent;
  }
`;
export const LinkContainer = styled(StyledDiv)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.theme.main};
  @media (max-width: 425px) {
    width: 135%;
    padding: 1em 10em;
    margin-left: -10.3em;
  }
  @media (max-width: 375px) {
    width: 60%;
    padding: 1em 10em;
    margin-left: -11em;
  }
`;
export const MiddleContent = styled(StyledDiv)`
  height: 300px;
  width: 25%;
  justify-content: space-around;
  padding: 0.7em 5em;
  margin: 0 0.5em 0 -0.5em;
  @media (min-width: 1024px) {
    width: 30%;
  }
  @media (max-width: 768px) {
    margin: 0 0 0 -5em;
  }
  @media (max-width: 425px) {
    margin: 4em -6.3em;
    width: 110%;
  }
  @media (max-width: 375px) {
    margin: 4em -7em;
    width: 105%;
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
  @media (max-width: 425px) {
    width: 160%;
    margin-left: -6.3em;
  }
  @media (max-width: 375px) {
    width: 160%;
    margin-left: -7em;
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
  margin: 0 1em;
  padding: 3em 2em;
  background: ${(props) => props.theme.main};
  border-radius: 12px;
  margin-bottom: 1em;
  @media (min-width: 1024px) {
    font-size: 1rem;
  }
  @media (max-width: 768px) {
    width: 117%;
  }
  @media (max-width: 425px) {
    padding: 1em 2em;
    margin-left: 0.5em;
    width: 104%;
  }
  @media (max-width: 375px) {
    padding: 1em 2em;
    margin-left: -0.2em;
    width: 103%;
  }
`;
export const CoinLinksContainer = styled.div`
  margin: 0 1em;
  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.5em;
    & > div {
      width: 32.5%;
    }
  }
  @media (max-width: 768px) {
    display: flex;
    width: 125%;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.5em;
    & > div {
      width: 32.5%;
    }
  }
  @media (max-width: 425px) {
    flex-direction: column;
    & > div {
      margin-left: -0.2em;
      width: 97%;
    }
  @media (max-width: 425px) {
    & > div {
      margin-left: -0.8em;
      width: 98%;
    }
  }
`;
export const Link = styled.div``;
export const Header = styled.h1`
  text-align: start;
  font-weight: 400;
  margin-bottom: 1.8em;
  font-size: 1rem;
  margin: 1em;
  @media (max-width: 425px) {
    margin: 1em;
    font-size: 1.5rem;
  }
`;
export const ImageContainer = styled.div`
  padding: 1.5em;
  border-radius: 12px;
  margin-bottom: 0;
  width: 40%;
  @media (max-width: 425px) {
    background-color: ${(props) => props.theme.main};
    padding: 3em;
    width: 125%;
  }
  @media (max-width: 375px) {
    margin-left: -2em;
  }
`;
export const Image = styled.img`
  object-fit: cover;
  width: 100%;
`;
export const Anchor = styled.a`
  color: ${(props) => props.theme.fontColor};
  text-decoration: none;
`;
export const Text = styled.div`
  display: flex;
  font-size: ${(props) => props.fontSize}px;
  flex-direction: ${(props) => props.direction};
  justify-content: center;
  align-items: center;
  @media (max-width: 425px) {
    font-size: 12px;
  }
`;
export const CoinText = styled.div`
  @media (max-width: 425px) {
    font-size: 25px;
    margin-top: 0.5em;
  }
  @media (max-width: 375px) {
    font-size: 25px;
    margin-top: 0.5em;
    margin-left: -1em;
  }
`;
export const LinkText = styled.div`
  display: flex;
  font-size: ${(props) => props.fontSize}px;
  flex-direction: ${(props) => props.direction};
  justify-content: center;
  align-items: center;
  @media (max-width: 425px) {
    font-size: 25px;
  }
`;
export const AllTimeText = styled.div`
  display: flex;
  font-size: ${(props) => props.fontSize}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 110%;
    font-size: 13px;
  }
  @media (max-width: 425px) {
    width: 100%;
    font-size: 15px;
  }
`;
export const AllTimeHeader = styled.div`
  display: flex;
  font-size: ${(props) => props.fontSize}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    font-size: 25px;
  }
`;
export const PercentDiv = styled.div`
  margin: 5px;
  color: ${({ type }) =>
    type === "true" ? "rgb(254, 16, 64)" : "rgb(0, 252, 42)"};
  font-size: 20px;
`;
export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 25px;
  }
`;
export const StackIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 25px;
  }
  @media (max-width: 425px) {
    margin-left: 90px;
  }
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
  margin-right: 10px;
`;
