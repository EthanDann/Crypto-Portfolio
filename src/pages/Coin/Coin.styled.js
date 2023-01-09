import styled from "styled-components";
import { ReactComponent as PlusIcon } from "./Plus.svg";
import { ReactComponent as UpArrow } from "./UpArrow.svg";
import { ReactComponent as DownArrow } from "./DownArrow.svg";
import { ReactComponent as LinkIcon } from "./LinkIcon.svg";

export const Container = styled.div`
  background-color: ${(props) => props.theme.secondary};
  @media (min-width: 768px) {
    width: 100%;
    margin: auto;
    margin-bottom: auto;
    padding: 1em 0 0 0;
    max-width: 1630px;
  }
`;
const StyledDiv = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.main};
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  margin: 0 1em;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    margin-top: 2em;
    max-width: 100%;
  }
`;
export const BottomPageContent = styled.div`
  max-width: 80%;
  margin: 0 1em;
  @media (min-width: 768px) {
    margin: 0 1em;
    display: flex;
    flex-direction: column;
    margin-top: 2em;
    max-width: 100%;
  }
`;
export const CoinInfoContainer = styled.div`
  width: 100%;
`;
export const LeftContent = styled(StyledDiv)`
  @media (min-width: 768px) {
    width: 20%;
    justify-content: space-between;
    &:nth-child(1) {
      width: 65%;
      margin-bottom: 2em;
      padding: 1em;
    }
    &:nth-child(2) {
      width: 80%;
    }
  }
`;
export const LinkContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 12px;
  height: 100%;
  padding: 1em;
  width: 100%;
  margin-bottom: 1em;
  & div {
    padding: 0;
  }
  @media (min-width: 768px) {
    margin: 0;
  }
`;
export const MiddleContent = styled(StyledDiv)`
  padding: 1em;
  margin: 0 2.25em 0 0;
  @media (min-width: 768px) {
    width: 30%;
    margin: 0 2.25em 0 0;
  }
`;
export const RightContent = styled(StyledDiv)`
  @media (min-width: 768px) {
    width: 40%;
  }
  // @media (max-width: 425px) {
  //   width: 160%;
  //   margin-left: -6.3em;
  // }
  // @media (max-width: 375px) {
  //   width: 160%;
  //   margin-left: -7em;
  // }
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
  margin-bottom: 1rem;
  padding: 3em 2em;
  background: ${(props) => props.theme.main};
  border-radius: 12px;
  margin-bottom: 1em;
  @media (min-width: 1024px) {
    font-size: 1rem;
  }
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
  background-color: ${(props) => props.theme.secondary};
  // @media (max-width: 425px) {
  //   background-color: ${(props) => props.theme.main};
  //   padding: 3em;
  //   width: 125%;
  // }
  // @media (max-width: 375px) {
  //   margin-left: -2em;
  // }
`;
export const Image = styled.img`
  object-fit: cover;
  width: 100%;
`;
export const Anchor = styled.a`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.7rem;
  width: 70%;
  display: flex;
  text-align: center;
  justify-content: center;
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: ${(props) => props.theme.fontColor};
  }
  @media (min-width: 768px) {
    font-size: 0.9rem;
  }
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
  padding-bottom: 1em;
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
  font-size: 12px;
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
