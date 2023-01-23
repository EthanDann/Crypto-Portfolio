import { ResultsList, ListItem, StyledText } from "./AddAssetInput.styled";

export const Result = (props) => {
  return (
    <ResultsList results={props.results} showResults={props.showResults}>
      {props.results.map((result) => (
        <ListItem>
          <StyledText onClick={(result) => props.handleCoinClick(result)}>
            {result.name}
          </StyledText>
        </ListItem>
      ))}
    </ResultsList>
  );
};