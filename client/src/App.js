import logo from './logo.svg';
import './App.css';
import API from "./utils/API"
import { useEffect } from 'react';

function App() {

   const getSchools = () => {
      API.getAll().then(function (res){
        console.log(res.json());
      })
    }

    const getByState = () => {
      API.getByState()
    }

    
    useEffect(()=>{
      // getSchools();
      getByState();
    }, [])
    
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
