import styled from "styled-components";

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
export const StyledPercentDiv = styled(TableDiv)<{ type: string }>`
  color: ${({ type }) =>
    type === "true" ? "rgb(254, 16, 64)" : "rgb(0, 252, 42)"};
`;
