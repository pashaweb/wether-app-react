import { SetStateAction, useState } from "react";
import SearchResultsList from "../SearchResultsList";
import { SearchBoxProps } from "./multiselector-types";

function SearchBox({ onSearch, placeholder }: SearchBoxProps): JSX.Element  {
  const [searchText, setSearchText] = useState("");
  //let 
  const handleSearch = (e: { target: { value: SetStateAction<string>; }; }) => {
    setSearchText(e.target.value);
    onSearch(e.target.value);
  };
  return (
    
    <div className="search-box">
        <label htmlFor="search-box__input" className="search-box__label">Search:</label>
      <input
        type="text"
        placeholder={placeholder}
        value={searchText} 
        onChange={handleSearch}
      />
      <SearchResultsList 
      searchResults={[
        { id: "1", resultText: "blal lala a;a;" },
        { id: "2", resultText: "blal lala a;a;" }]} 
        searchQuery="lal" />
    </div>
  );
}
export default SearchBox;