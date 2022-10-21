import './App.css';
import { apiSlice } from '../../apiSlice';

const { useSearchCityQuery } = apiSlice;

function App() {
  const { data } = useSearchCityQuery('london');
  console.log(data);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
