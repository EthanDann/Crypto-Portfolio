import styled, { keyframes } from "styled-components";
import { NumericFormat } from "react-number-format";
import { AddAssetInput } from "components";
import { ReactComponent as UpArrow } from "./UpArrow.svg";
import { ReactComponent as DownArrow } from "./DownArrow.svg";

export const Container = styled.div`
  display: flex;
  z-index: 1;
  background: ${(props) => props.theme.secondary};
  flex-direction: column;
  max-width: 100%;
  height: auto;
  max-height: 100%;
  filter: ${(props) => (props.isOpen ? "brightness(0.8)" : "none")};
`;
export const FillerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 430px;
  background: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.fontColor};
  font-size: 3rem;
`;
const StyledDiv = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.main};
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 12px;
`;
export const Button = styled.button`
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
export const ModalButton = styled.button`
  width: 40%;
  background: ${(props) =>
    props.background ? props.background : "rgb(6, 213, 84)"};
  color: ${(props) => (props.background ? "rgb(6, 213, 84)" : "#fff")};
  cursor: pointer;
  font-size: 1rem;
  padding: 1rem 0;
  margin: 0 0.5rem;
  border: none;
  border-radius: 10px;
  &:hover {
    background: ${(props) => (props.hover ? props.hover : "rgb(6, 175, 84)")};
  }
  &:disabled {
    cursor: not-allowed;
    background: ${(props) =>
      props.background ? props.background : "rgb(6, 213, 84)"};
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
export const ModalButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin: 2rem;
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
  width: 750px;
  height: 400px;
  background: ${(props) => props.theme.secondary};
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;
export const ErrorMessage = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: red;
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ModalInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const InputContainer = styled.div`
  margin: 0 0 1rem 3rem;
  width: 408px;
  height: auto;
  &:nth=child(1),
  &:nth-child(2),
  &:nth-child(3) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
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
export const PriceInput = styled(NumericFormat)`
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
  @media (max-width: 768px) {
    width: 20vw;
  }
  @media (max-width: 425px) {
    border-radius: 10px;
    font-size: 0.8rem;
    padding-left: 0.8rem;
    width: 25vw;
    height: 1vh;
  }`;
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
    margin: 1rem 0 4rem 0;
  }
`;
export const ModalContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
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
      margin: 0 1em 2em 1em;
      padding: 3em;
    }
  }
`;
export const ModalInfoContainer = styled(StyledDiv)`
  @media (min-width: 768px) {
    width: 100%;
    &:nth-child(1) {
      width: 7%;
      padding: 2em 3em;
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
export const ModalImageContainer = styled.div`
  padding: 1em;
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
  margin: 0;
  font-size: 0.9rem;
  font-weight: 500;
`;
export const AssetInfo = styled.p`
  color: ${(props) => (props.color ? props.color : props.theme.fontColor)};
  font-size: 1rem;
  margin-right: 0.5rem;
  margin-left: 0.25rem;
`;
export const ProgressRow = styled.div`
  display: flex;
  flex-direction: row;
`;
export const ProgressContainer = styled.div`
  width: 80%;
  padding: 0.25rem 5rem 0.25rem 0;
  background: #00fc2a;
  position: relative;
  border-radius: 10px;
  margin: auto 5px;
  overflow: hidden;
  border: none;
  margin-right: auto;
`;
const BaseBox = styled.div`
  height: 100%;
  z-index: 1;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 5px;
  border: none;
`;

export const Progress = styled(BaseBox)`
  background: rgb(255, 255, 255);
  width: ${({ percent }) => percent}%;
  min-width: ${({ percent }) => (percent < 2 ? "2" : percent)}%;
`;
export const AllTimeContent = styled(StyledDiv)`
  margin-bottom: 1em;
  padding: 1em;
  width: 930px;
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
export const StyledUpArrow = styled(UpArrow)`
  margin: 0 3px 4px 3px;
`;
export const StyledDownArrow = styled(DownArrow)`
  margin: 0 3px 4px 3px;
`;
export const ArrowContainer = styled.div`
   {
    height: 120px;
    width: 120px;
    margin: 3rem auto 0;
    position: relative;
  }
`;
const ArrowAnimation = keyframes`
  {
  0%   {bottom:0;}
  75% {bottom:90px;}
  100% {bottom:0;}
  }
  `;
const CircleAnimation = keyframes`
  {
  0%   {height:120px;}
  10% {height: 120px;}
  50% {height: 130px;}
  75% {height: 150px;}
  90% {height: 130px;}
  100% {height: 120px;}
  }
  `;
const PulseAnimation = keyframes` {       
  0% {transform: scale(0); opacity: 0;}
  8% {transform: scale(0); opacity: 0;}
  15% {transform: scale(0.1); opacity: 1;}
  30% {transform: scale(0.5); opacity: 1;}
  100% {opacity: 0; transform: scale(1.5);}
}`;
export const Circle = styled.span`
   {
    background-color: transparent;
    height: 120px;
    width: 120px;
    display: block;
    border: 5px solid rgb(6, 213, 84);
    border-radius: 100px;
    position: absolute;
    bottom: 0;
    z-index: 1;
    animation-name: ${CircleAnimation};
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-direction: normal;
    animation-play-state: running;
  }
`;
export const Arrow = styled.i`
   {
    font-size: 42px;
    color: rgb(6, 213, 84);
    bottom: 27px;
    position: absolute;
    left: 50%;
    margin-left: -18px;
    animation-name: ${ArrowAnimation};
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-direction: normal;
    animation-play-state: running;
  }
`;
export const Pulse = styled.span`
   {
    margin: 0 auto;
    border-radius: 100px;
    position: absolute;
    left: 2px;
    bottom: 0px;
    z-index: 0;
    opacity: 0;
    width: 110px;
    height: 110px;
    border: 10px solid rgb(6, 213, 84);
    border-radius: 100px;
    animation: ${PulseAnimation} 1s linear infinite 0.3s;
  }
`;
