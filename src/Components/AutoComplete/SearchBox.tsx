import React, { SetStateAction, useMemo, useState } from "react";

import { debounce } from 'lodash';
import SearchResultsList from "./SearchResultsList";
import { SearchBoxProps } from "./autocomplete-types";
function SearchBox({
  onSearch = () => { },
  placeholder = "",
  lableText = "",
  searchResults = [],
  minSearchLength = 3,
  searchTimeout = 1000 }: SearchBoxProps): JSX.Element {
  const [searchText, setSearchText] = useState("");
  const [resultsState, setResultsState] = useState(searchResults);
  const handleSearch = (e: { target: { value: SetStateAction<string>; }; }) => {
    setSearchText(e.target.value);
    if (e.target.value.length >= minSearchLength) {
      onSearch(e.target.value);
    }
  };
  const debouncedChangeHandler = useMemo(
    () => {
      return debounce(handleSearch, searchTimeout)
    }
    , []);


  return (

    <div className="search-box">
      <label htmlFor="search-box__input" className="search-box__label">{lableText}:</label>
      <input
        type="text"
        placeholder={placeholder}
        onChange={debouncedChangeHandler}
      />
      <SearchResultsList searchResults={resultsState} searchQuery={searchText} />
    </div>
  );
}
export default SearchBox;