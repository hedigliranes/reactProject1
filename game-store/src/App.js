import React from 'react';
import logo from './logo.svg';
import './App.css';
import mk11 from "./images/MK11.jpg";
import gtav from "./images/GTAV.jpg"
import Games from './Games'
import LittleCar from './LittleCar'
import CartItems from './CartItems'

class App extends React.Component 
{

    games = [
    {
      name: 'Mortal Kombat 11',
      img: mk11,
      price: 'R$ 120',
      gender: 'Luta'
    },
    {
      name: 'Grand Theft Auto V',
      img: gtav,
      price: 'R$ 80',
      gender: 'Aventura'
    }
  ]

  constructor(props){
    super(props)
    this.state = {
      gamesCar: [],
      gender: 'Todos'

    }
  }

  selectGender(gender){
    console.log(gender);
      this.setState({
        gender: gender
      })
  }

  addCarrinho(jogo){
      this.state.gamesCar.push(jogo);
            console.log(this.state.gamesCar);

      this.setState({
        gamesCar: this.state.gamesCar
      })
     }

    removeCart(index)
    {
      this.state.gamesCar.splice(index);
    }


  render(){

    let navbar = 
    <div className="Navbar">
      <p className="Text" style={{float: "left"}}>Vapor</p>
      <a className="Text" style={{float: "right"}} href="index">Início</a>
    </div>;

      let list = 
      <div className="MainScreen">
        <Games 
          listGames = {this.games} 
          gender = {this.state.gender}
          addCarrinho = {jogo => this.addCarrinho(jogo) }/>
      </div>

      let mainMenu =
      <div className="SidebarList">
        <div className="Sidebar">

          <p className="SidebarText">Categorias</p>

          <button className="SidebarButton" onClick={ () => this.selectGender("Todos")}>Todos</button>
          
          <button className="SidebarButton" onClick={ () => this.selectGender("Ação")}>Ação</button>

          <button className="SidebarButton" onClick={ () => this.selectGender("Aventura")}>Aventura</button>

          <button className="SidebarButton" onClick={ () => this.selectGender("Luta")}>Luta</button>

          <button className="SidebarButton" onClick={ () => this.selectGender("Tiro")}>Tiro</button>

          <button className="SidebarButton" onClick={ () => this.selectGender("RPG")}>RPG</button>


        </div>

          {list}
      </div>

      //let t2 = 

      let cart = 
      <div>
        <h1 style={{textAlign : "center"}}>Carrinho</h1>
        <CartItems 
        cartList = {this.state.gamesCar}
        removeCart = {indx => this.removeCart(indx)}
         />
      </div>

      let test = [navbar, <p style = {{paddingBottom : "3%", marginBottom : "20px",marginTop : "0px"}}>.</p>, mainMenu, cart];
      return (test)

      return (
        <div>
          <button onClick={ () => this.next()}>Selecionar</button>
        </div>
      )
    }
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
}

export default App;
