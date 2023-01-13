import { useState, useEffect } from "react";
import axios from "axios";
import {
  Wrapper,
  StyledLink,
  SearchContainer,
  StyledSearchIcon,
  StyledLightSearchIcon,
  StyledDarkSearchIcon,
  StyledInput,
} from "./SearchInput.styled";

const Coin = (props) => {
  return (
    <Wrapper results={props.results} showResults={props.showResults}>
      {props.results.map((coin) => (
        <div>
          <StyledLink
            to={`/Coin/${coin.id}`}
            onClick={() => props.handleLinkClick}
          >
            {coin.name}
          </StyledLink>
        </div>
      ))}
    </Wrapper>
  );
};

const SearchInput = (props) => {
  const { coin, setCoin } = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const getCoin = async (name) => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `https://crypto-app-server.herokuapp.com/coins/${name}`
      );
      setCoin(data);
      setIsLoading(false);
    } catch (err) {
      setError(err);
    }
  };
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    setShowResults(true);
  };
  const handleLinkClick = () => {
    setSearchTerm("");
    setShowResults(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getCoin(searchTerm);
    setSearchTerm("");
  };
  useEffect(() => {
    if (!searchTerm) {
      setSearchTerm("");
      setShowResults(false);
    }
    //eslint-disable-next-line
  }, [searchTerm]);
  useEffect(() => {
    if (coin && coin.length > 0) {
      setShowResults(true);
    }
    //eslint-disable-next-line
  }, [coin]);
  return (
    <SearchContainer onSubmit={handleSubmit}>
      <StyledSearchIcon>
        {props.theme ? <StyledDarkSearchIcon /> : <StyledLightSearchIcon />}
      </StyledSearchIcon>
      <StyledInput
        type="text"
        placeholder="Search..."
        onChange={handleChange}
        value={searchTerm}
      />
      {/* {showResults && (
        <div>
          coin &&
          <Coin
            results={coin}
            handleLinkClick={handleLinkClick}
            showResults={showResults}
          />
        </div>
      )} */}
    </SearchContainer>
  );
};

export default SearchInput;
