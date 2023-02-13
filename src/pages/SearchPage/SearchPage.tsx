import { useWindowSize } from "usehooks-ts";
import { Wrapper } from "./SearchPage.styled";
import { SearchPageInput } from "components";

const SearchPage: React.FC = () => {
  const { height: screenHeight } = useWindowSize();
  return (
    <Wrapper height={screenHeight}>
      <SearchPageInput />
    </Wrapper>
  );
};

export default SearchPage;
