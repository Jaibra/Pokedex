import './App.css';
import Logo from "./Logo";
import CaughtPokemon from "./CaughtPokemon";
import BestPokemon from "./BestPokemon";









const App = () => (
  <> 
   <Logo appName="Pokedex" />
   <h2>{4+6}</h2>
   <BestPokemon />
   <CaughtPokemon />
  </>
    
  );

export default App;
