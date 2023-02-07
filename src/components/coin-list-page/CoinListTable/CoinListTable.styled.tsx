import styled from "styled-components";
import { ReactComponent as Filter } from "./filter.svg";

export const TableContainer = styled.div<{ theme: string }>`
  margin-top: 1.5em;
  padding: 1.5em 1em;
  margin-bottom: 1em;
  border-radius: 6px;
  background: ${({ theme }) => theme.main};
  @media (min-width: 430px) {
    margin-bottom: 4em;
  }
`;
export const CoinTable = styled.table<{ theme: string }>`
  width: 100%;
  border-radius: 6px;
  font-weight: 400;
  border-collapse: collapse;
  background-color: ${({ theme }) => theme.main};
  transition: ${({ theme }) => theme.transition};
`;
export const TableHeader = styled.thead<{ theme: string }>`
  background: ${({ theme }) => theme.main};
  color: ${({ theme }) => theme.fontColor};
  position: sticky;
  top: -15px;
  z-index: 100;
  height: 40px;
  @media (min-width: 430px) {
    top: 0px;
  }
`;
export const TableBody = styled.tbody``;
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
export const ScrollableDiv = styled.div<{ theme: string }>`
  width: 100%;
  height: 320px;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 8px;
    height: 5px;
  }
  &::-webkit-scrollbar-corner {
    background: ${({ theme }) => theme.secondary};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.fontColor};
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
export const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
export const FilterIcon = styled(Filter)<{ theme: string }>`
  width: 20px;
  margin-left: 5px;
  fill: ${({ theme }) => theme.fontColor};
  cursor: pointer;
  &:hover {
    outline: solid 1px ${({ theme }) => theme.fontColor};
    border-radius: 7px;
  }
`;
