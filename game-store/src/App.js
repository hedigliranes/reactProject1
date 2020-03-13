import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() 
{
  let navbar = 
  <div className="Navbar">
    <p className="Text" style={{float: "left"}}>Vapor</p>
    <p className="Text" style={{float: "right"}}>Início</p>
  </div>;

  let category =
  <div className="Sidebar">
    <p className="SidebarText">Categorias</p>
  </div>

  let test = [navbar, <p style = {{paddingBottom : "40px", margin : "0px"}}>.</p>, category];
  return (
      test

    /*
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
    */
  );
}

export default App;
