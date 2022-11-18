import styled from "styled-components";

export const Wrapper = styled.div`
  flex-flow: column nowrap;
  order: ${(props) => props.order};
  background: ${(props) => props.theme.main};
  width: auto;
  padding: 2vw;
  margin: auto;
  margin-top: 5rem;
  border-radius: 25px;
`;

export const StyledLegend = styled.div`
  line-height: 1.4;
  font-weight: lighter;
`;
export const LegendH4 = styled.h4`
  font-size: 20px;
`;

export const StyledH5 = styled.h5``;
