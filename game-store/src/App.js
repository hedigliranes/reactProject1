import React from 'react';
import logo from './logo.svg';
import './App.css';
import mk11 from "./images/MK11.jpg"

function App() 
{
  let navbar = 
  <div className="Navbar">
    <p className="Text" style={{float: "left"}}>Vapor</p>
    <p className="Text" style={{float: "right"}}>Início</p>
  </div>;

  let list = 
  <div className="MainScreen">
    <img src={mk11}></img>
  </div>

  let mainMenu =
  <div>
    <div className="Sidebar">
      <p className="SidebarText">Categorias</p>
    </div>
    {list}
  </div>

  let test = [navbar, <p style = {{paddingBottom : "3%", margin : "0px"}}>.</p>, mainMenu];
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
