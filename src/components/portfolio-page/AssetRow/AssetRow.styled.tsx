import styled from "styled-components";
import { NumericFormat } from "react-number-format";
import { AddAssetInput } from "components";
import { ReactComponent as UpArrow } from "./UpArrow.svg";
import { ReactComponent as DownArrow } from "./DownArrow.svg";
import { ReactComponent as EditIcon } from "./EditIcon.svg";
import { ReactComponent as TrashIcon } from "./TrashIcon.svg";

const StyledDiv = styled.div<{ theme: string }>`
  display: flex;
  background-color: ${({ theme }) => theme.secondary};
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 12px;
  @media (min-width: 1024px) {
    background: ${({ theme }) => theme.main};
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

export const DeleteButton = styled.button`
  background: #e8113d;
  color: #fff;
  cursor: pointer;
  font-size: 0.9rem;
  margin: 0;
  margin-left: 0.5rem;
  border: none;
  border-radius: 10px;
  &:hover {
    background: #d22030;
  }
  &:disabled {
    cursor: not-allowed;
    background: #e8113d;
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
export const StyledSearchInput = styled(AddAssetInput)<{ theme: string }>`
  background-color: ${({ theme }) => theme.secondary};
  @media (min-width: 1024px) {
    background: ${({ theme }) => theme.main};
  }
`;
export const StyledInput = styled.input<{ theme: string }>`
  background-color: ${({ theme }) => theme.secondary};
  transition: ${({ theme }) => theme.transition};
  color: ${({ theme }) => theme.fontColor};
  border: none;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  margin: auto;
  width: 65%;
  padding: 0.8rem;
  padding-left: 2rem;
  font-size: 1.1rem;
  &::placeholder {
    color: ${({ theme }) => theme.fontColor};
  }
  &:focus {
    outline: none;
  }
  @media (min-width: 768px) {
    width: 77.5%;
  }
  @media (min-width: 1024px) {
    background: ${({ theme }) => theme.main};
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
export const PriceInput = styled(NumericFormat)<{ theme: string }>`
  background-color: ${({ theme }) => theme.secondary};
  transition: ${({ theme }) => theme.transition};
  color: ${({ theme }) => theme.fontColor};
  border: none;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  margin: auto;
  width: 65%;
  padding: 0.8rem;
  padding-left: 2rem;
  font-size: 1.1rem;
  &::placeholder {
    color: ${({ theme }) => theme.fontColor};
  }
  &:focus {
    outline: none;
  }
  @media (min-width: 768px) {
    width: 77.5%;
  }
  @media (min-width: 1024px) {
    background: ${({ theme }) => theme.main};
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
`;
export const Row = styled.div<{ theme: string }>`
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
    border-bottom: 3px solid ${({ theme }) => theme.secondary};
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
export const CoinInfoContainer = styled(StyledDiv)<{ theme: string }>`
  padding-top: 2em;
  margin-top: 2em;
  background: ${({ theme }) => theme.main};
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
export const ImageContainer = styled.div<{ theme: string }>`
  padding: 1.5em;
  border-radius: 12px;
  margin-bottom: 0;
  background-color: ${({ theme }) => theme.secondary};
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
export const Text = styled.p<{ theme: string }>`
  font-color: ${({ theme }) => theme.fontColor};
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
export const AssetInfo = styled.p<{ theme: string; color?: string }>`
  color: ${({ color, theme }) => (color ? color : theme.fontColor)};
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
export const AssetInput = styled(NumericFormat)<{
  theme: string;
  disabled: boolean;
}>`
  font-size: 1rem;
  margin: 0.5rem 0;
  margin-left: 0.25rem;
  border: ${({ disabled }) => (disabled ? "none" : "1px solid gray")};
  background-color: ${({ theme }) => theme.main};
  transition: ${({ theme }) => theme.transition};
  color: ${({ theme }) => theme.fontColor};
  width: 34%;
  &::placeholder {
    color: ${({ theme }) => theme.fontColor};
  }
  &:focus {
    outline: none;
  }
  @media (min-width: 1024px) {
    width: 10%;
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
export const DateAsset = styled.input<{
  theme: string;
  disabled: boolean;
}>`
  font-size: 1rem;
  margin: 0.5rem 0;
  margin-left: 0.25rem;
  width: 33%;
  border: ${({ disabled }) => (disabled ? "none" : "1px solid gray")};
  background-color: ${({ theme }) => theme.secondary};
  transition: ${({ theme }) => theme.transition};
  color: ${({ theme }) => theme.fontColor};
  @media (min-width: 1024px) {
    background-color: ${({ theme }) => theme.main};
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
  cursor: pointer;
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

export const Progress = styled(BaseBox)<{ percent: number }>`
  background: rgb(255, 255, 255);
  width: ${({ percent }) => percent}%;
  min-width: ${({ percent }) => (percent < 2 ? "2" : percent)}%;
`;
export const CoinContent = styled(StyledDiv)`
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
export const AssetContent = styled(StyledDiv)`
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
