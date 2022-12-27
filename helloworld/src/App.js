import logo from "./logo.svg";
import "./App.css";

import ExpenceItem from "./Components/ExpenceItem";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Prasad Pulipati welcome back</p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ExpenceItem></ExpenceItem>
     
      </header>
    </div>
  );
}

export default App;
