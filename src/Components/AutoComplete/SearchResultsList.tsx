import { useEffect, useState } from "react";
import { SearchResultListProps } from "./autocomplete-types";
import SearchResult from "./SearchResultText";

function SearchResultsList({searchResults, searchQuery}: SearchResultListProps):JSX.Element {
  const [resultsState, setResultsState] = useState(searchResults);
  useEffect(() => {
    setResultsState(searchResults);
  } , [searchResults]);
  return (
      <div className="search-results-box__content">
        {resultsState.map((result) => (
          <SearchResult resultText={result.resultText} searchQuery={searchQuery} key={result.id} />
        ))}
      </div>
  );
}
export default SearchResultsList;