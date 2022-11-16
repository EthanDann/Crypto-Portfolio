import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.main};
  width: 35%;
  padding: 0.2rem 2.5rem;
  margin: 5rem 0 0 5rem;
  border-radius: 10px;
`;

export const StyledLegend = styled.div`
  line-height: 1.4;
  font-weight: lighter;
`;
export const LegendH4 = styled.h4`
  font-size: 20px;
`;

export const StyledH5 = styled.h5``;
