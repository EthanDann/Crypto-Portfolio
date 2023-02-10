import styled from "styled-components";
import { Link } from "react-router-dom";

export const TableBody = styled.tbody``;
export const TableRow = styled.tr<{ theme: string }>`
  border-bottom: 2px solid ${({ theme }) => theme.secondary};
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
export const StyledLink = styled(Link)<{ theme: string }>`
  text-decoration: none;
  color: ${({ theme }) => theme.fontColor};
  &:hover,
  &.active {
    background-color: ${({ theme }) => theme.secondary};
    text-decoration: underline;
    cursor: pointer;
  }
`;
export const NameContainer = styled.div<{ theme: string }>`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.fontColor};
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
export const StyledP = styled.p<{ color: string }>`
  color: ${({ color }) => color};
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
export const Circle = styled.div<{ color: string }>`
  background-color: ${({ color }) => (color ? color : "white")};
  border-radius: 50%;
  height: 0.3rem;
  width: 0.3rem;
  margin: auto 0.5rem 0.1rem 0.5rem;
  display: inline-block;
`;
export const Container = styled.div<{ width: number; padding: number }>`
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

export const Progress = styled(BaseBox)<{ percent: number }>`
  background: rgb(138, 146, 178);
  width: ${({ percent }) => percent}%;
  min-width: ${({ percent }) => (percent < 2 ? "2" : percent)}%;
`;
