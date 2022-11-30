import styled from "styled-components";

export const Td = styled.td``;
export const TableDiv = styled.div`
  padding: 0 1rem 0 1rem;
`;
export const StyledPercentDiv = styled(TableDiv)`
  color: ${({ type }) =>
    type === "true" ? "rgb(254, 16, 64)" : "rgb(0, 252, 42)"};
`;
