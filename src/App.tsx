import React from 'react';
import './App.css';
import Nav from "./components/navbar"
import Home from "./pages/home/home"
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Home />
      </BrowserRouter>
    </div>
  );
}

export default App;
