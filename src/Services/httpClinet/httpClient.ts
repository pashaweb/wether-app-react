import { SearchResultListProps } from "../../Components/AutoComplete/autocomplete-types";

interface locationDataItem {
        "id": number,
        "name": string,
        "region": string,
        "country": string,
        "lat": number,
        "lon": number,
        "url": string
    }

const baseApiUrl = 'https://api.weatherapi.com/v1/current';
const searchTyps = {
    location: 'search',
    wethear: 'current'
}
const apiKey = "8ee68a50f4e94279a4d162815222304";

export async function searchLocation(searchQuery: string): Promise<SearchResultListProps> {
    const url = `${baseApiUrl}${searchTyps.location}.json?key=${apiKey}&q=${searchQuery}`;
    const response = await fetch(url);
    const data:locationDataItem[] = await response.json();
    const searchResults = data.map((item: locationDataItem) => {
        return {
            id: item.id.toString(),
            resultText: item.name + ', ' + item.region + ', ' + item.country
        }
    })
    const res: SearchResultListProps = {
        searchResults,
        searchQuery
    }
    return res;
}