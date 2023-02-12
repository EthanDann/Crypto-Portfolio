import { ResultsList, ListItem, StyledText } from "./AddAssetInput.styled";

interface Props {
  results: any;
  showResults: boolean;
  handleCoinClick: (e: { target: { innerHTML: string } }) => void;
}
interface ResultProps {
  name: string;
}

export const Result: React.FC<Props> = ({
  results,
  showResults,
  handleCoinClick,
}) => {
  return (
    <ResultsList results={results} showResults={showResults}>
      {results.map(({ name }: ResultProps) => (
        <ListItem>
          <StyledText
            onClick={(e) =>
              handleCoinClick({
                target: { innerHTML: e.currentTarget.innerHTML },
              })
            }
          >
            {name}
          </StyledText>
        </ListItem>
      ))}
    </ResultsList>
  );
};
