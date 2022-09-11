import { useState } from 'react'
import './App.css'
import { SearchBoxProps } from './Components/AutoComplete/autocomplete-types';
import SearchBox from './Components/AutoComplete/SearchBox';


// function ButtonCount(props: { setCount: (count: number) => void; setCountF: (count: number) => number; count: number }) {
//   return (<button onClick={() => props.setCount(props.setCountF(props.count))}>
//     count is {props.count}
//   </button>);
// }


function App() {
  // const setCountF = (count: number): number => count + 4;
  // const [count, setCount] = useState(10)
  const searchBoxProps:SearchBoxProps = {
    onSearch: (
      searchText:string) => console.log(searchText), 
    placeholder: "search", 
    lableText: "search for location",
    searchResults: []
  };

  return (
    <div className="App"  >
      <h1>Vite + React</h1>
      <SearchBox {...searchBoxProps} />
    </div>
  )
}

export default App
