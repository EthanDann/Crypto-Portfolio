import styled, { keyframes } from "styled-components";
import { NumericFormat } from "react-number-format";
import { AddAssetInput } from "components";
import { ReactComponent as UpArrow } from "./UpArrow.svg";
import { ReactComponent as DownArrow } from "./DownArrow.svg";
import { ReactComponent as EditIcon } from "./EditIcon.svg";
import { ReactComponent as TrashIcon } from "./TrashIcon.svg";

export const Container = styled.div`
  display: flex;
  z-index: 1;
  background: ${(props) => props.theme.main};
  flex-direction: column;
  max-width: 100%;
  height: auto;
  min-height: ${(props) => (props.assets.length === 1 ? "600px" : "auto")};
  max-height: 100%;
  filter: ${(props) => (props.isOpen ? "brightness(0.8)" : "none")};
  @media (min-width: 1024px) {
    background: ${(props) => props.theme.secondary};
  }
`;
export const FillerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 430px;
  background: ${(props) => props.theme.main};
  color: ${(props) => props.theme.fontColor};
  font-size: 3rem;
  @media (min-width: 1024px) {
    background: ${(props) => props.theme.secondary};
  }
  @media (max-width: 425px) {
    min-height: 475px;
  }
`;
const StyledDiv = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.secondary};
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 12px;
  @media (min-width: 1024px) {
    background: ${(props) => props.theme.main};
  }
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
  @media (min-width: 2560px) {
    font-size: 2rem;
    padding: 2rem 10rem;
  }
  @media (max-width: 320px) {
    padding: 0.9rem 7rem;
  }
`;
export const ModalButton = styled.button`
  width: 60%;
  background: ${(props) =>
    props.background ? props.background : "rgb(6, 213, 84)"};
  color: ${(props) => (props.background ? "rgb(6, 213, 84)" : "#fff")};
  cursor: pointer;
  font-size: 0.8rem;
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
  @media (min-width: 768px) {
    padding: 1rem 0;
    font-size: 1rem;
  }
  @media (min-width: 2560px) {
    font-size: 1.7rem;
  }
`;
export const DeleteButton = styled.button`
  background: ${(props) => (props.background ? props.background : "#e8113d")};
  color: #fff;
  cursor: pointer;
  font-size: 0.9rem;
  margin: 0;
  margin-left: 0.5rem;
  border: none;
  border-radius: 10px;
  &:hover {
    background: ${(props) => (props.hover ? props.hover : "#d22030")};
  }
  &:disabled {
    cursor: not-allowed;
    background: ${(props) => (props.background ? props.background : "#e8113d")};
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
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
  right: 19%;
  top: 25%;
  z-index: 1000;
  justify-content: center;
  align-items: center;
  @media (min-width: 1024px) {
    right: ${(props) => (props.added ? "15%" : "27%")};
  }
  @media (min-width: 1200px) {
    right: ${(props) => (props.added ? "22%" : "32%")};
  }
  @media (min-width: 1440px) {
    right: ${(props) => (props.added ? "25%" : "35%")};
  }
  @media (min-width: 2560px) {
    right: ${(props) => (props.added ? "30%" : "40%")};
  }
  @media (max-width: 375px) {
    right: 15%;
  }
  @media (max-width: 320px) {
    right: 9%;
  }
`;
export const AddAssetModal = styled.div`
  width: 100%;
  height: auto;
  background: ${(props) => props.theme.main};
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  @media (min-width: 768px) {
    width: 100%;
    height: 50%;
  }
  @media (min-width: 1024px) {
    background: ${(props) => props.theme.secondary};
    width: auto;
  }
  @media (min-width: 2560px) {
    width: 1100px;
  }
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
  justify-content: center;
  align-items: center;
  margin-bottom: 0.8em;
  @media (min-width: 1024px) {
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 0;
  }
  @media (min-width: 1440px) {
    margin-bottom: 1.5em;
  }
  @media (min-width: 2560px) {
    margin-bottom: 0;
  }
`;
export const ModalInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const InputContainer = styled.div`
  margin: 0 0 1rem 3rem;
  width: 200px;
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
  @media (min-width: 768px) {
    width: 408px;
  }
  @media (min-width: 2560px) {
    width: 800px;
  }
`;
export const StyledSearchInput = styled(AddAssetInput)`
  background-color: ${(props) => props.theme.secondary};
  @media (min-width: 1024px) {
    background: ${(props) => props.theme.main};
  }
`;
export const StyledInput = styled.input`
  background-color: ${(props) => props.theme.secondary};
  transition: ${(props) => props.theme.transition};
  color: ${(props) => props.theme.fontColor};
  border: none;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  margin: auto;
  width: 65%;
  padding: 0.8rem;
  padding-left: 2rem;
  font-size: 1.1rem;
  &::placeholder {
    color: ${(props) => props.theme.fontColor};
  }
  &:focus {
    outline: none;
  }
  @media (min-width: 768px) {
    width: 77.5%;
  }
  @media (min-width: 1024px) {
    background: ${(props) => props.theme.main};
  }
  @media (min-width: 2560px) {
    width: 79%;
    font-size: 1.4rem;
  }
  @media (max-width: 425px) {
    border-radius: 10px;
    font-size: 0.8rem;
    padding-left: 0.8rem;
    height: 1vh;
  }
`;
export const PriceInput = styled(NumericFormat)`
  background-color: ${(props) => props.theme.secondary};
  transition: ${(props) => props.theme.transition};
  color: ${(props) => props.theme.fontColor};
  border: none;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  margin: auto;
  width: 65%;
  padding: 0.8rem;
  padding-left: 2rem;
  font-size: 1.1rem;
  &::placeholder {
    color: ${(props) => props.theme.fontColor};
  }
  &:focus {
    outline: none;
  }
  @media (min-width: 768px) {
    width: 77.5%;
  }
  @media (min-width: 1024px) {
    background: ${(props) => props.theme.main};
  }
  @media (min-width: 2560px) {
    width: 79%;
    font-size: 1.4rem;
  }
  @media (max-width: 425px) {
    border-radius: 10px;
    font-size: 0.8rem;
    padding-left: 0.8rem;
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
  @media (min-width: 2560px) {
    font-size: ${(props) => (props.modal ? "3rem" : "1.5rem")};
    margin: ${(props) => (props.modal ? "0 1em 1em 1em" : "0 1em 2em 1em")};
  }
`;
export const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-around;
  }
  @media (min-width: 2560px) {
    justify-content: space-evenly;
  }
  @media (max-width: 768px) {
    border-bottom: 3px solid ${(props) => props.theme.secondary};
  }
`;
export const ModalContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
  @media (min-width: 768px) {
    margin: 1rem;
  }
`;
export const ContentRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;
export const CoinInfoContainer = styled(StyledDiv)`
  padding-top: 2em;
  margin-top: 2em;
  background: ${(props) => props.theme.main};
  @media (min-width: 1024px) {
    margin: 0;
    margin-bottom: 2em;
    margin-right: 2em;
  }
  @media (min-width: 768px) {
    width: 100%;
  }
  &:nth-child(1) {
    width: 7%;
    padding: 3em;
  }
  @media (min-width: 2560px) {
    &:nth-child(1) {
      height: 190px;
      width: 15%;
      margin-right: 0;
    }
  }
`;
export const ModalInfoContainer = styled(StyledDiv)`
  margin-bottom: 1rem;
  background: ${(props) => props.theme.main};
  @media (min-width: 425px) {
    width: 100%;
    &:nth-child(1) {
      width: 15%;
      padding: 1em 3em;
    }
  }
  @media (min-width: 1024px) {
    margin-bottom: 0;
    &:nth-child(1) {
      width: 9%;
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
  background: ${(props) => props.theme.secondary};
`;
export const Image = styled.img`
  height: 35px;
  width: 35px;
  @media (min-width: 2560px) {
    height: 75px;
    width: 75px;
  }
`;
export const CoinName = styled.div`
  padding-bottom: 1em;
  font-size: 1.2rem;
  margin-top: 0.5em;
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
  @media (min-width: 2560px) {
    font-size: 2.5rem;
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
  font-color: ${(props) => props.theme.fontColor};
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
  font-color: ${(props) => props.theme.fontColor};
  margin: 0;
  font-size: 1rem;
  font-weight: 500;
  @media (min-width: 1024px) {
    font-size: 0.7rem;
  }
  @media (min-width: 1440px) {
    font-size: 1rem;
  }
  @media (min-width: 2560px) {
    font-size: 1.5rem;
  }
`;
export const AssetInfo = styled.p`
  color: ${(props) => (props.color ? props.color : props.theme.fontColor)};
  font-size: 1rem;
  margin: 0.5rem;
  @media (min-width: 1024px) {
    font-size: 0.8rem;
    margin-right: 0.5rem;
    margin-left: 0.25rem;
  }
  @media (min-width: 1440px) {
    font-size: 1.1rem;
  }
  @media (min-width: 2560px) {
    margin: 0.5rem 1rem;
  }
  @media (min-width: 2560px) {
    font-size: 1.5rem;
  }
`;
export const AssetInput = styled(NumericFormat)`
  font-size: 1rem;
  margin: 0.5rem 0;
  margin-left: 0.25rem;
  border: ${(props) => (props.contentEditable ? "1px solid gray" : "none")};
  background-color: ${(props) => props.theme.main};
  transition: ${(props) => props.theme.transition};
  color: ${(props) => props.theme.fontColor};
  border: none;
  width: 17%;
  &::placeholder {
    color: ${(props) => props.theme.fontColor};
  }
  &:focus {
    outline: none;
  }
  @media (min-width: 1024px) {
    width: 8%;
    font-size: 0.8rem;
  }
  @media (min-width: 1440px) {
    font-size: 1.1rem;
  }
  @media (min-width: 2560px) {
    font-size: 1.5rem;
  }
  @media (max-width: 320px) {
    width: 19%;
  }
`;
export const DateAsset = styled.input`
  font-size: 1rem;
  margin: 0.5rem 0;
  margin-left: 0.25rem;
  width: 28%;
  border: ${(props) => (props.contentEditable ? "1px solid gray" : "none")};
  background-color: ${(props) => props.theme.secondary};
  transition: ${(props) => props.theme.transition};
  color: ${(props) => props.theme.fontColor};
  @media (min-width: 1024px) {
    background-color: ${(props) => props.theme.main};
    font-size: 0.8rem;
    width: 10%;
  }
  @media (min-width: 1440px) {
    font-size: 1.1rem;
  }
  @media (min-width: 2560px) {
    font-size: 1.5rem;
  }
  @media (max-width: 320px) {
    width: 31%;
  }
`;
export const SaveButton = styled.button`
  background: rgb(6, 213, 84);
  color: #fff;
  padding: 0.25rem 0.75rem;
  margin: 0 0.5rem;
  border-radius: 10px;
  border: none;
`;
export const ProgressRow = styled.div`
  display: flex;
  flex-direction: row;
`;
export const ProgressContainer = styled.div`
  padding: 0.25rem 3rem 0.25rem 0;
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
  padding: 1em;
  width: 90%;
  @media (min-width: 1024px) {
    width: 95%;
  }
  @media (min-width: 1440px) {
    height: 3em;
    width: 95%;
  }
  @media (min-width: 2560px) {
    align-items: center;
    height: auto;
    width: 105%;
  }
  @media (max-width: 320px) {
    width: 80%;
  }
  &:nth-child(2) {
    margin-bottom: 0;
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
export const TrashContainer = styled.div`
  display: flex;
  background: #e8113d;
  cursor: pointer;
  margin-left: 0.5rem;
  align-items: center;
  border-radius: 7px;
  padding: 2px;
  height: 23px;
  width: 23px;
`;
export const StyledTrashIcon = styled(TrashIcon)``;
export const EditIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  border-radius: 10px;
  cursor: pointer;
  height: 30px;
  width: 30px;
  background: ${(props) => props.theme.secondary};
  @media (min-width: 1024px) {
    background: ${(props) => props.theme.main};
  }
  @media (max-width: 320px) {
    margin: 0;
    margin-left: 0.5rem;
    height: 25px;
    width: 25px;
  }
`;
export const RowHeader = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: 10px 0;
  font-color: ${(props) => props.theme.fontColor};
  font-size: 0.8rem;
  font-weight: 550;
  @media (min-width: 1024px) {
    font-size: 1rem;
  }
  @media (min-width: 2560px) {
    font-size: 2rem;
  }
  @media (max-width: 320px) {
    font-size: 0.8rem;
  }
`;
export const Subtitle = styled.span`
  margin-left: 10px;
  font-color: ${(props) => props.theme.fontColor};
  opacity: 0.7;
  text-align: center;
  font-size: 0.6rem;
  font-weight: 450;
  @media (min-width: 2560px) {
    font-size: 1rem;
  }
  @media (max-width: 320px) {
    font-size: 0.5rem;
  }
`;
export const StyledEditIcon = styled(EditIcon)`
  @media (max-width: 320px) {
    width: 50%;
  }
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
