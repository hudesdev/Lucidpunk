import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import logo from './logo.svg';
// import './App.css';
import Afterlogin from './pages/Afterlogin';

function App() {
  return (
    <div className="w-screen bg-[#131619] h-[2500px]">
      <Routes>
        <Route path = "/" element = {<Afterlogin/>}></Route>
        {/* <Route path = "/" element = {}></Route>
        <Route path = "/" element = {}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
