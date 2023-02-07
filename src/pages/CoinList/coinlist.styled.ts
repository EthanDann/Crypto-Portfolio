import styled from "styled-components";

export const Wrapper = styled.div<{ theme: string }>`
  background: ${({ theme }) => theme.secondary};
  padding: 0.5em;
  max-width: 2560px;
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
export const Header = styled.h1<{ theme: string }>`
  color: ${({ theme }) => theme.fontColor};
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

export const ChartContainer = styled.div<{ theme: string }>`
  margin-top: 2em;
  width: 100%;
  border-radius: 8px;
  padding: 0.5em;
  height: 150px;
  max-width: 840px;
  max-height: 450px;
  background: ${({ theme }) => theme.main};
  @media (min-width: 430px) {
    height: 35vh;
    @media (min-width: 650px) {
      height: 25vw;
    }
  }
`;
