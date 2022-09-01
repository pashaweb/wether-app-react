import { useEffect } from "react";

interface SearchTextPresenterProps{
    searchText: string;
    underlineText: string;
}

function SearchTextPresenter({searchText, underlineText}: SearchTextPresenterProps) {
    useEffect(() => {
        console.log(searchText);
    } , [searchText]);
    return (
        <div className="search-text-presenter">
            <div className="search-text-presenter-text">
                {searchText}
            </div>
            <div className="search-text-presenter-underline">
                {underlineText}
            </div>
        </div>
    );
}