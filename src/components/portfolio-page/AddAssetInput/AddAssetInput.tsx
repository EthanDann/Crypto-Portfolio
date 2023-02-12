import { useState, useEffect, useRef } from "react";
import useOnClickOutside from "use-onclickoutside";
import { useAppSelector, useAppDispatch } from "store/hooks";
import { Result } from "./Result";
import { selectCoin } from "store/portfolio/portfolioSlicer";
import { SearchContainer, StyledInput } from "./AddAssetInput.styled";

const AddAssetInput = () => {
  const [results, setResults] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [showResults, setShowResults] = useState<boolean>(false);
  const coins = useAppSelector((state) => state.coins);
  const dispatch = useAppDispatch();
  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchTerm(e.target.value);
    if (e.target.value.length > 0) {
      const filteredResults: any[] = coins.data.filter((coin) =>
        coin.name.toLowerCase().includes(e.target.value)
      );
      setResults(filteredResults);
    } else {
      setShowResults(false);
    }
  };
  const handleCoinClick = (e: { target: { innerHTML: string } }) => {
    const coinName = e.target.innerHTML;
    const data = coins.data.filter((el: any) => el.name.includes(coinName));
    setSearchTerm(coinName);
    dispatch(
      selectCoin({
        name: coinName,
        id: data[0].id,
        image: data[0].image,
        symbol: data[0].symbol.toUpperCase(),
        purchase_price: "",
        purchase_date: "",
      })
    );
    setShowResults(false);
  };
  const ref = useRef(null);
  useOnClickOutside(ref, () => setShowResults(false));
  useEffect(() => {
    if (searchTerm.length === 0) {
      setSearchTerm("");
      setShowResults(false);
    }
    //eslint-disable-next-line
  }, [searchTerm]);
  useEffect(() => {
    if (results && results.length > 0) {
      setShowResults(true);
    }
    //eslint-disable-next-line
  }, [results]);
  return (
    <SearchContainer onSubmit={(e) => e.preventDefault()}>
      <StyledInput
        type="text"
        placeholder={"Search for Coin..."}
        onChange={handleChange}
        value={searchTerm}
      />
      {showResults && (
        <div>
          <Result
            results={results}
            handleCoinClick={handleCoinClick}
            showResults={showResults}
          />
        </div>
      )}
    </SearchContainer>
  );
};

export default AddAssetInput;
