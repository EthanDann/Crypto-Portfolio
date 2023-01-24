import { ResultsList, ListItem, StyledLink } from "./SearchInput.styled";

export const Result = (props) => {
  return (
    <ResultsList results={props.results} showResults={props.showResults}>
      {props.results.map((result) => (
        <ListItem>
          <StyledLink
            to={`/Coin/${result.name.toLowerCase()}`}
            onClick={() => props.handleLinkClick()}
          >
            {result.name}
          </StyledLink>
        </ListItem>
      ))}
    </ResultsList>
  );
};
