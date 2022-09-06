/** @jest-environment jsdom */
import React from 'react'
import { SearchResultProps } from "./multiselector-types";
import { render, screen} from "@testing-library/react"
import SearchResult from './SearchResultText';
const searchTextProps:SearchResultProps = {resultText: "blal lala a;a;", searchQuery: "lal"};
const searchTextProps2:SearchResultProps = {resultText: "blal Lala a;a;", searchQuery: "lal"};
describe('should ', () => {
   it('should have no underline', () => {
      const {container} = render(<SearchResult resultText="searchText" searchQuery="underlineText" />);
      expect(screen.queryAllByText(/searchText/i)).toHaveLength(1);
      const spans = container.querySelectorAll('span');
      console.log(spans);
      expect(spans).toHaveLength(0);
   });
   it('should have underline',async () => {
      const {container} = render(<SearchResult {...searchTextProps} />);
      const spans = container.querySelectorAll('span');
      expect(spans).toHaveLength(2);
   });
   it('should have underline',async () => {
      const {container} = render(<SearchResult {...searchTextProps2} />);
      const spans = container.querySelectorAll('span');
      expect(spans).toHaveLength(2);
   });
});