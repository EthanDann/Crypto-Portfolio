import styled from "styled-components";

export const CoinLinkContainer = styled.div<{ theme: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.main};
  border-radius: 12px;
  height: 100%;
  padding: 1em 0;
  width: 100%;
  margin-bottom: 1em;
  & div {
    padding: 0;
  }
  @media (min-width: 1024px) {
    margin: 0;
  }
`;
export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 2em;
`;

export const SiteLink = styled.a<{ theme: string }>`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.7rem;
  width: 70%;
  display: flex;
  text-align: center;
  justify-content: center;
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: ${({ theme }) => theme.fontColor};
  }
  @media (min-width: 1024px) {
    font-size: 0.9rem;
  }
  @media (max-width: 425px) {
    font-size: 0.9rem;
  }
`;
