import styled from "styled-components";
import { NumericFormat } from "react-number-format";
import { AddAssetInput } from "components";

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
export const ImageContainer = styled.div`
  padding: 1.5em;
  border-radius: 12px;
  margin-bottom: 0;
  background-color: ${(props) => props.theme.secondary};
`;

export const Image = styled.img`
  height: 35px;
  width: 35px;
  @media (min-width: 2560px) {
    height: 75px;
    width: 75px;
  }
`;
export const StyledSearchInput = styled(AddAssetInput)`
  background-color: ${(props) => props.theme.secondary};
  @media (min-width: 1024px) {
    background: ${(props) => props.theme.main};
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
export const ModalInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
export const ModalImageContainer = styled.div`
  padding: 1em;
  border-radius: 12px;
  margin-bottom: 0;
  background: ${(props) => props.theme.secondary};
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
export const ErrorMessage = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: red;
`;
