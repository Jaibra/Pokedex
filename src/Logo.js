import React from 'react';

function logWhenClicked() {
  console.log("Componente renderizado");
};

const Logo = () =>(
    <header>
          <h1>Welcome to the Pokedex</h1>
          <img alt='Pokedex' onClick={()=>{logWhenClicked()}} src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"></img>
        </header>
      );





      
      
export default Logo;