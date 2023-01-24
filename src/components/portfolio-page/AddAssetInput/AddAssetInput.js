import { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { Result } from "./Result";
import {
  SearchContainer,
  StyledSearchIcon,
  StyledLightSearchIcon,
  StyledDarkSearchIcon,
  StyledInput,
} from "./AddAssetInput.styled";

const AddAssetInput = (props) => {
  const [results, setResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showResults, setShowResults] = useState(false);
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value.length > 0) {
      const filteredResults = props.coins.filter((coin) =>
        coin.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setResults(filteredResults);
    } else {
      setShowResults(false);
    }
  };
  const handleCoinClick = (e) => {
    setSearchTerm(e.target.innerHTML);
    props.handleCoinClick(e.target.innerHTML);
    setShowResults(false);
  };
  const dropdownRef = useRef();
  useEffect(() => {
    const handleBlur = (event) => {
      const node = dropdownRef.current;
      if (node && node.contains(event.target)) {
        return;
      }
      setShowResults(false);
    };
    showResults
      ? document.addEventListener("click", handleBlur)
      : document.removeEventListener("click", handleBlur);
    return () => {
      document.removeEventListener("click", handleBlur);
    };
  }, [showResults]);
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
      {props.icon && (
        <StyledSearchIcon>
          (props.theme ? <StyledLightSearchIcon /> : <StyledDarkSearchIcon />)
        </StyledSearchIcon>
      )}
      <StyledInput
        type="text"
        placeholder={props.placeholder ? props.placeholder : "Search..."}
        onChange={handleChange}
        value={searchTerm}
        main={props.main}
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

const mapStateToProps = (state) => ({
  coins: state.coins.data,
});
export default connect(mapStateToProps)(AddAssetInput);
