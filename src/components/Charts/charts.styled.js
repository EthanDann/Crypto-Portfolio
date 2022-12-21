import styled from "styled-components";

export const Wrapper = styled.div`
  width: 33%;
  order: ${(props) => props.order};
  background: ${(props) => props.theme.main};
  padding: 2vw;
  margin: auto;
  margin-top: 5rem;
  border-radius: 25px;
  @media (max-width: 1440px) {
    width: 485px;
  }
  @media (max-width: 1024px) {
    width: 375px;
    margin-left: 3rem;
  }
  @media (max-width: 768px) {
    width: 260px;
    margin-left: 3rem;
  }
  @media (max-width: 665px) {
    width: 87%;
    margin-left: 1.5rem;
  }
  @media (max-width: 425px) {
    width: 83%;
    margin-left: 1.75rem;
  }
  @media (max-width: 425px) {
    width: 90%;
    margin-left: 0.5rem;
  }
`;

export const StyledLegend = styled.div`
  line-height: 1.4;
  font-weight: lighter;
`;
export const LegendH4 = styled.h4`
  font-size: 20px;
`;

export const StyledH5 = styled.h5``;
