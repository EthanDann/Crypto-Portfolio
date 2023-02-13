import { memo } from "react";
import { v4 as uuid } from "uuid";
import { ResultsList, ListItem, StyledLink } from "./SearchPageInput.styled";

interface Props {
  results: any[];
  isOpen: boolean;
  handleLinkClick: () => void;
}
interface ResultProps {
  name: string;
}

export const Result = memo(({ results, isOpen, handleLinkClick }: Props) => {
  if (!isOpen) return null;
  if (!results.length)
    return (
      <ResultsList>
        <ListItem>No results</ListItem>
      </ResultsList>
    );
  return (
    <ResultsList>
      {results.map((result: ResultProps) => (
        <ListItem key={uuid()}>
          <StyledLink
            to={`/Coin/${result.name.toLowerCase()}`}
            onClick={handleLinkClick}
          >
            {result.name}
          </StyledLink>
        </ListItem>
      ))}
    </ResultsList>
  );
});
