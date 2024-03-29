import React, { useState, useEffect, useRef } from "react";
import useOnClickOutside from "use-onclickoutside";
import { useAppSelector } from "store/hooks";
import { Result } from "./Result";
import {
  SearchContainer,
  StyledSearchIcon,
  StyledDarkSearchIcon,
  StyledInput,
} from "./SearchPageInput.styled";

interface CoinProps {
  name: string;
}

const SearchInput = () => {
  const [results, setResults] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const coins = useAppSelector((state) => state.coins.data);
  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchTerm(e.target.value);
    const searchValue =
      typeof e.target.value === "string"
        ? e.target.value
        : e.target.value(searchTerm);
    if (searchValue.length > 0) {
      const uniqueData = Array.from(new Set(coins.map((item) => item.id))).map(
        (id) => coins.find((item) => item.id === id)
      );
      const filteredResults: any[] = uniqueData.filter((coin) =>
        coin.name.toLowerCase().includes(e.target.value)
      );
      setResults(filteredResults);
    } else {
      setIsOpen(false);
    }
  };
  const handleLinkClick = () => {
    setSearchTerm("");
    setIsOpen(false);
  };
  const ref = useRef(null);
  useOnClickOutside(ref, () => setIsOpen(false));
  useEffect(() => {
    if (searchTerm.length === 0) {
      setSearchTerm("");
      setIsOpen(false);
    }
    //eslint-disable-next-line
  }, [searchTerm]);
  useEffect(() => {
    if (results && results.length > 0) {
      setIsOpen(true);
    }
    //eslint-disable-next-line
  }, [results]);
  return (
    <SearchContainer onSubmit={(e) => e.preventDefault()}>
      <StyledSearchIcon>
        <StyledDarkSearchIcon />
      </StyledSearchIcon>
      <StyledInput
        type="text"
        placeholder="Search..."
        onChange={handleChange}
        value={searchTerm}
      />
      {isOpen && searchTerm.length > 0 && (
        <div>
          <Result
            results={results}
            handleLinkClick={handleLinkClick}
            isOpen={isOpen}
          />
        </div>
      )}
    </SearchContainer>
  );
};

export default SearchInput;
