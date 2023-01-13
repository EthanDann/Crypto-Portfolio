import styled from "styled-components";
import { ReactComponent as LinkIcon } from "./LinkIcon.svg";
import { ReactComponent as UpArrow } from "./UpArrow.svg";
import { ReactComponent as DownArrow } from "./DownArrow.svg";
import { ReactComponent as PlusIcon } from "./Plus.svg";
import { ReactComponent as StackIcon } from "./StackIcon.svg";

const StyledDiv = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.main};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
`;
export const Header = styled.h1`
  text-align: start;
  font-weight: 400;
  margin-bottom: 1.8em;
  font-size: 1.5rem;
  margin: 1em;
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  margin: 0 1em;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    margin-top: 2em;
    max-width: 100%;
  }
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CoinInfoContainer = styled(StyledDiv)`
  margin-bottom: 1em;
  padding-top: 2em;
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
      margin-bottom: 0;
    }
  }
`;
export const OuterContainer = styled.div`
  width: 100%;
`;
export const InnerContainer = styled.div`
  display: flex;
  font-size: 1.1em;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 425px) {
    font-size: 0.7em;
  }
`;
export const ImageContainer = styled.div`
  padding: 1.5em;
  border-radius: 12px;
  margin-bottom: 0;
  background-color: ${(props) => props.theme.secondary};
`;
export const Image = styled.img`
  object-fit: cover;
  width: 100%;
`;
export const CoinName = styled.div`
  padding-bottom: 1em;
  @media (max-width: 425px) {
    font-size: 25px;
    margin-top: 0.5em;
  }
  @media (max-width: 375px) {
    margin-left: -1em;
  }
`;
export const LinkContainer = styled(StyledDiv)`
  margin-bottom: 1em;
  width: 100%;
  @media (min-width: 768px) {
    justify-content: space-between;
    width: 80%;
  }
`;
export const LinkContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  padding: 1em 0;
  width: 100%;
  @media (min-width: 768px) {
    justify-content: flex-start;
    margin: 0;
  }
`;
export const LinkIconContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0;
`;
export const Anchor = styled.a`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1rem;
  width: 100%;
  margin-right: 1.3rem;
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
    margin-right: 0;
    font-size: 0.9rem;
  }
`;
export const AllTimeContent = styled(StyledDiv)`
  margin-bottom: 1em;
  padding: 1em;
  @media (min-width: 768px) {
    width: 30%;
    margin: 0 2.25em 0 0;
  }
`;
export const AllTimeHeader = styled.div`
  display: flex;
  font-size: 2rem;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const PercentDiv = styled.div`
  margin: 5px;
  color: ${({ type }) => (type ? "rgb(254, 16, 64)" : "rgb(0, 252, 42)")};
  font-size: 20px;
`;
export const StackIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1em 0;
`;
export const AllTimeText = styled.div`
  display: flex;
  font-size: 1rem;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 1em 0;
`;
export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 25px;
  }
`;
export const MarketDataContent = styled(StyledDiv)`
  @media (min-width: 768px) {
    width: 40%;
    padding: 0;
  }
`;
export const List = styled.ul`
  list-style: none;
`;
export const ListItem = styled.li`
  display: flex;
  font-size: 14px;
  align-items: center;
  margin: 0;
  padding: 0;
  @media (min-width: 768px) {
    margin: 1em;
  }
`;
export const StyledLinkIcon = styled(LinkIcon)`
  margin: 0 1em;
`;
export const StyledUpArrow = styled(UpArrow)`
  margin-right: 10px;
`;
export const StyledDownArrow = styled(DownArrow)`
  margin-right: 10px;
`;
export const StyledPlusIcon = styled(PlusIcon)`
  margin-right: 10px;
`;
export const StyledStackIcon = styled(StackIcon)``;
