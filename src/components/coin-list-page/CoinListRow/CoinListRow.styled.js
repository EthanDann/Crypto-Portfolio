import styled from "styled-components";
import { Link } from "react-router-dom";

export const TableBody = styled.tbody``;
export const TableRow = styled.tr`
  border-bottom: 2px solid ${(props) => props.theme.secondary};
  &:last-child {
    border-bottom: none;
  }
  & > td {
    &:last-child {
      width: 0;
    }
  }
`;
export const Td = styled.td`
  font-size: 0.8rem;
  text-align: start;
  padding-right: 1em;
  @media (min-width: 1440px) {
    font-size: 0.9rem;
    padding: 1.25em 1em;
  }
`;
export const TableDiv = styled.div`
  display: flex;
  align-items: center;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.fontColor};
  &:hover,
  &.active {
    background-color: ${(props) => props.theme.secondary};
    text-decoration: underline;
    cursor: pointer;
  }
`;
export const NameContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${(props) => props.theme.fontColor};
`;
export const CoinName = styled.div`
  font-size: 0.8rem;
  display: flex;
  flex-direction: column;
  @media (min-width: 1440px) {
    font-size: 1rem;
    flex-direction: row;
  }
`;
export const CurrencySymbol = styled.span`
  padding-right: 2px;
`;
export const StyledP = styled.p`
  color: ${(props) => props.color};
`;
export const ProgressContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Image = styled.img`
  height: 30px;
  width: 30px;
  object-fit: cover;
  margin-right: 1em;
  border-radius: 100%;
`;
export const Circle = styled.div`
  background-color: ${({ color }) => (color ? color : "white")};
  border: ${({ borderColor }) =>
    borderColor ? `${borderColor} 1.5px solid` : "none"};
  box-shadow: ${({ borderColor }) =>
    borderColor
      ? "rgba(6, 213, 84, 0) 0px 0px 10px -3px, rgba(6, 213, 84, .6) 0px 0px 10px -1px"
      : "none"};
  border-radius: 50%;
  height: 0.3rem;
  width: 0.3rem;
  margin: auto 0.5rem 0.1rem 0.5rem;
  display: inline-block;
`;
export const Container = styled.div`
  width: ${({ width }) => width}%;
  padding: ${({ padding }) => padding}rem;
  background: rgb(71, 76, 119);
  position: relative;
  border-radius: 10px;
  margin: auto 0;
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
  background: rgb(138, 146, 178);
  width: ${({ percent }) => percent}%;
  min-width: ${({ percent }) => (percent < 2 ? "2" : percent)}%;
`;
