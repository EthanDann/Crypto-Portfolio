import { useState, useEffect, useRef } from "react";
import {
  ResultsList,
  ListItem,
  StyledLink,
  SearchContainer,
  StyledSearchIcon,
  StyledLightSearchIcon,
  StyledDarkSearchIcon,
  StyledInput,
} from "./SearchInput.styled";

const Coin = (props) => {
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

const SearchInput = (props) => {
  // eslint-disable-next-line
  const [coins, setCoins] = useState([
    {
      name: "Bitcoin",
    },
    {
      name: "Bitlyte",
    },
    {
      name: "Ethereum",
    },
    {
      name: "Dogecoin",
    },
    {
      name: "Litecoin",
    },
  ]);
  const [results, setResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showResults, setShowResults] = useState(false);
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value.length > 0) {
      const filteredResults = coins.filter((coin) =>
        coin.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setResults(filteredResults);
    } else {
      setShowResults(false);
    }
  };
  const handleLinkClick = () => {
    setSearchTerm("");
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
      <StyledSearchIcon>
        {props.theme ? <StyledLightSearchIcon /> : <StyledDarkSearchIcon />}
      </StyledSearchIcon>
      <StyledInput
        type="text"
        placeholder="Search..."
        onChange={handleChange}
        value={searchTerm}
      />
      {showResults && (
        <div>
          <Coin
            results={results}
            handleLinkClick={handleLinkClick}
            showResults={showResults}
          />
        </div>
      )}
    </SearchContainer>
  );
};

export default SearchInput;
