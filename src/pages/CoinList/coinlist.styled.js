import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  background: ${(props) => props.theme.secondary};
  padding: 0 0.5em;
  max-width: 1920px;
  margin: auto;
  transition-property: font-size;
  transition-duration: 4s;
  transition-delay: 2s;
  @media (min-width: 430px) {
    padding: 1em 2em;
  }
  @media (min-width: 1440px) {
    padding: 1em 5em;
  }
`;
export const ChartWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  @media (min-width: 650px) {
    display: flex;
    flex-direction: row;
    #price-chart,
    #volume-chart {
      width: 48%;
      display: flex;
    }
  }
`;

export const ChartContainer = styled.div`
  margin-top: 2em;
  width: 100%;
  border-radius: 8px;
  padding: 0.5em;
  height: 150px;
  max-width: 840px;
  max-height: 450px;
  background: ${(props) => props.theme.main};
  @media (min-width: 430px) {
    height: 35vh;
    @media (min-width: 650px) {
      height: 25vw;
    }
  }
`;

export const TableContainer = styled.div`
  margin-top: 1.5em;
  padding: 1.5em 1em;
  margin-bottom: 1em;
  border-radius: 6px;
  background: ${(props) => props.theme.main};
  @media (min-width: 430px) {
    margin-bottom: 4em;
  }
`;
export const CoinTable = styled.table`
  width: 100%;
  border-radius: 6px;
  font-weight: 400;
  border-collapse: collapse;
  background-color: ${(props) => props.theme.main};
  transition: ${(props) => props.theme.transition};
`;
export const ScrollableDiv = styled.div`
  width: 100%;
  height: 320px;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 8px;
    height: 5px;
  }
  &::-webkit-scrollbar-corner {
    background: ${(props) => props.theme.secondary};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.fontColor};
    border-radius: 4px;
  }
  @media (min-height: 1024px) {
    height: 480px;
  }
  @media (min-width: 1024px) {
    height: 600px;
  }
`;
export const ScrollText = styled.h4`
  text-align: center;
`;
export const TableHeader = styled.thead`
  background: ${(props) => props.theme.main};
  color: ${(props) => props.theme.fontColor};
  position: sticky;
  top: -15px;
  height: 40px;
  @media (min-width: 430px) {
    top: 0px;
  }
`;
export const HeaderTr = styled.tr``;
export const Styledth = styled.th`
  font-weight: 300;
  text-align: start;
  font-size: 0.7rem;
  padding-left: 0.7em;
  @media (min-width: 430px) {
    font-size: 0.8rem;
  }
  @media (min-width: 1440px) {
    font-size: 1rem;
  }
`;
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
  padding-right: 4em;
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
