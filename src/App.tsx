import { useState } from 'react'
import './App.css'
import SearchResult from './Components/multiselector/SearchResultText';
import SearchResultsList from './Components/SearchResultsList';


function ButtonCount(props: { setCount: (count: number) => void; setCountF: (count: number) => number; count: number }) {
  return (<button onClick={() => props.setCount(props.setCountF(props.count))}>
    count is {props.count}
  </button>);
}


function App() {
  const setCountF = (count: number): number => count + 4;
  const [count, setCount] = useState(10)

  return (
    <div className="App"  >

      <h1>Vite + React</h1>
      <div className="card">
        <ButtonCount setCountF={setCountF} count={count} setCount={setCount}></ButtonCount>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <SearchResult resultText="blal lala a;a;" searchQuery="lal" />
      <SearchResultsList searchResults={[{ id: "1", resultText: "blal lala a;a;" }, { id: "2", resultText: "blal lala a;a;" }]} searchQuery="lal" />
    </div>
  )
}

export default App
