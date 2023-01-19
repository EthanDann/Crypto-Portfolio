import styled from "styled-components";
import { AddAssetInput } from "components";

export const Container = styled.div`
  display: flex;
  z-index: 1;
  background: ${(props) => props.theme.secondary};
  flex-direction: column;
  max-width: 100%;
  filter: ${(props) => (props.isOpen ? "brightness(0.8)" : "none")};
`;
const StyledDiv = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.main};
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 12px;
`;
export const AddAssetButton = styled.button`
  background: rgb(6, 213, 84);
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  padding: 1rem 8rem;
  border: none;
  border-radius: 10px;
  &:hover {
    background: rgb(6, 175, 84);
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    margin-top: 5rem;
  }
`;
export const ModalContainer = styled.div`
  display: flex;
  position: absolute;
  right: 22%;
  top: 25%;
  z-index: 1000;
  justify-content: center;
  align-items: center;
`;
export const AddAssetModal = styled.div`
  background: ${(props) => props.theme.secondary};
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
export const InputContainer = styled.div`
  margin: 1rem 0 1rem 3rem;
  width: 408px;
  height: 50px;
  &:nth-child(3) {
    margin: 0 0 0 3rem;
  }
`;
export const StyledSearchInput = styled(AddAssetInput)`
  background-color: ${(props) => props.theme.main};
`;
export const StyledInput = styled.input`
  background-color: ${(props) => props.theme.main};
  transition: ${(props) => props.theme.transition};
  color: ${(props) => props.theme.fontColor};
  border: none;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  margin: auto;
  width: 77.5%;
  padding: 0.8rem;
  padding-left: 2rem;
  font-size: 1.1rem;
  &::placeholder {
    color: ${(props) => props.theme.fontColor};
  }
  &:focus {
    outline: none;
  }
  @media (max-width: 768px) {
    width: 20vw;
  }
  @media (max-width: 425px) {
    border-radius: 10px;
    font-size: 0.8rem;
    padding-left: 0.8rem;
    width: 25vw;
    height: 1vh;
  }
`;
export const Header = styled.h1`
  display: flex;
  justify-content: flex-start;
  font-weight: 400;
  margin-bottom: 1.8em;
  font-size: 1.5rem;
  margin: 0 1em 2em 1em;
  padding-top: 1em;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (min-width: 768px) {
    margin: 1rem;
  }
`;
export const ContentRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const CoinInfoContainer = styled(StyledDiv)`
  margin-bottom: 1em;
  padding-top: 2em;
  @media (min-width: 768px) {
    width: 100%;
    &:nth-child(1) {
      width: 7%;
      margin: 0 1em 2em 0;
      padding: 3em;
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
  height: 35px;
  width: 35px;
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
export const Text = styled.p`
  font-size: 1rem;
  font-weight: 500;
`;
export const AssetInfo = styled.p`
  font-size: 1rem;
  margin-right: 1rem;
  margin-left: 0.4rem;
`;
export const AllTimeContent = styled(StyledDiv)`
  margin-bottom: 1em;
  padding: 1em;
  width: 925px;
  @media (min-width: 768px) {
    height: 3em;
    margin: 0 0 2em 0;
    &:nth-child(2) {
      margin-bottom: 0;
    }
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
