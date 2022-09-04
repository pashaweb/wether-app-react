import { useEffect, useState } from "react";
import { SearchResultProps } from "./multiselector-types";

function SearchResult({resultText, searchQuery}: SearchResultProps) {
    const [resultTextState, setSearchTextState] = useState("");
    
    useEffect(() => {
        const brackText:string[] = resultText.toLocaleLowerCase().split(searchQuery.toLocaleLowerCase());
        const innerHtml:string = brackText.join(`<span class="underline">${searchQuery}</span>`);
        setSearchTextState(innerHtml); 

    } , [resultText]);
    return (
        <div className="search-text-presenter" dangerouslySetInnerHTML={{__html:resultTextState}} ></div>
    );
}

export default SearchResult;