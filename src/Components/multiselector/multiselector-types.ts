

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

export interface SearchBoxProps { 
    placeholder: string;
    lableText: string;
    searchResults: SearchResultListItemProps[];
    onSearch: CallbackFunctionVariadicAnyReturn;
    searchQuery?: string;
    minSearchLength?: number;
    searchTimeout?: number;
}

type CallbackFunctionVariadicAnyReturn = (...args: any[]) => any;