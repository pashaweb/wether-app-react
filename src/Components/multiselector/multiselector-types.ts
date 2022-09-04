
export interface SearchResultProps {
    resultText: string;
    searchQuery: string;
}
export interface SearchResultListProps {
     searchResults:  SearchResultListItemProps[];
     searchQuery: string;  
}
export interface SearchResultListItemProps {
    id: string;
    resultText: string;
}