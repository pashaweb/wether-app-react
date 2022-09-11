/** @jest-environment jsdom */
import React from 'react';
import { render } from "@testing-library/react";
import SearchResultsList from './SearchResultsList';
import { SearchResultListProps } from './autocomplete-types';

const searchResultListProps: SearchResultListProps = {
  searchResults: [{
    id: "a85a8e6b-348b-4011-a1ec-1e78e9620782",
    resultText: "UPDATE Projects SET and DELETE"
  }, {
    id: "a85a8e6b-348b-4011-a1ec-1e78e9620782",
    resultText: "DELETE FROM Projects WHERE pid = %s"
  }],
  searchQuery: "DELETE"
}

const searchResultListProps2: SearchResultListProps = {
  searchResults: [{
    id: "a85a8e6b-348b-4011-a1ec-1e78e9620782",
    resultText: "UPDATE Projects SET and DELETE"
  }, {
    id: "a85a8e6b-348b-4011-a1ec-1e78e9620782",
    resultText: "DELETE FROM Projects WHERE pid = %s"
  }, {
    id: "a85a8e6b-348b-4011-a1ec-1e78e9620782", 
    resultText: "DELETE FROM Projects WHERE pid = %s"}],
  searchQuery: "DELETE"
}

describe("Search Results List", () => {

  it("renders", () => {
    const { rerender, container } = render(<SearchResultsList 
      searchResults={searchResultListProps.searchResults} 
      searchQuery = {searchResultListProps.searchQuery} />);
    let divs = container.querySelectorAll('.search-results-box__content div');
    expect(divs).toHaveLength(2);
    rerender(<SearchResultsList 
      searchResults={searchResultListProps2.searchResults} 
      searchQuery = {searchResultListProps2.searchQuery} />);
      divs = container.querySelectorAll('.search-results-box__content div');
      expect(divs).toHaveLength(3);

  });
});