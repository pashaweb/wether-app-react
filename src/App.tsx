import { useState } from 'react'
import './App.css'
import SearchBox from './Components/multiselector/SearchBox';
import SearchResult from './Components/multiselector/SearchResultText';
import SearchResultsList from './Components/SearchResultsList';


// function ButtonCount(props: { setCount: (count: number) => void; setCountF: (count: number) => number; count: number }) {
//   return (<button onClick={() => props.setCount(props.setCountF(props.count))}>
//     count is {props.count}
//   </button>);
// }


function App() {
  // const setCountF = (count: number): number => count + 4;
  // const [count, setCount] = useState(10)

  return (
    <div className="App"  >
      <h1>Vite + React</h1>
      <SearchResult resultText="blal lala a;a;" searchQuery="lal" />
      <SearchResultsList searchResults={[{ id: "1", resultText: "blal lala a;a;" }, { id: "2", resultText: "blal lala a;a;" }]} searchQuery="lal" />
      <SearchBox onSearch={(e) => console.log(e)} placeholder="search" />
    </div>
  )
}

export default App
