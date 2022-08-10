import React from 'react'
import { Router, Routes, Route } from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
import './components/Form/Upload'
import { Button } from 'semantic-ui-react'
import Upload from './components/Form/Upload';
import NavBar from './components/NavBar/NavBar';



function App() {
  const ButtonExampleButton = () => <Button>Click Here</Button>
  return (
    <div className="App">
      {/* <Router> */}
      <NavBar />
      {/* <Routes>

        </Routes> */}
      {/* </Router> */}
      <header className="App-header">
        {/* <img src="" className="App-logo" alt="logo" /> */}
        <p>
          Edit <Button>Click Here</Button> <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Upload></Upload>
      </header>
    </div>
  );
}

export default App;
