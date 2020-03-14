import React from 'react'


function Games(props) {

		const games = props.listGames.map(a =>
		{ 
			if(a.gender === props.gender){
				return <div class="container">
				  <img class = "image" key={a.name} src={a.img}></img>
				  <div class="middle">
          			<button className="AddButton" onClick={jogo => props.addCarrinho(jogo)}>Adicionar ao carrinho</button>
				  </div>
				</div>
			} else if(props.gender === "Todos"){
			    return <div class="container">
				  <img class = "image" key={a.name} src={a.img}></img>
				  <div class="middle">
          			<button className="AddButton" onClick={ jogo => props.addCarrinho(a)}>Adicionar ao carrinho</button>
				  </div>
				</div>
			}
			
		})

		return <div style={{width: '100%'}}>
		<h2 style={{color: 'white', textAlign: 'center', marginTop: '8px',marginRight: '9em'}}> Lista de Jogos </h2>
			{games}
		</div> 

		
}

export default Games;