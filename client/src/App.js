import logo from './logo.svg';
import './App.css';
import API from "./utils/API"
import { useEffect } from 'react';
import Signup from './pages/Signup/index.js';

function App() {

   const getSchools = () => {
      API.getAll().then(function (res){
        console.log(res.json());
      })
    }

    
    useEffect(()=>{
      getSchools();
    }, [])
    
  return (
    <div>
      <Signup />
    </div>
  );
}

export default App;
