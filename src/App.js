import React,{useState, useEffect} from 'react';
import './App.css';

export default function App() {

  const [pokelista, setPokelista] = useState([])
  const [pokesprite, setPokesprite] = useState([])
  //ATUALIZANDO NO STATE POR ENQUANTO
  const [pokemon, setPokemon] = useState(300)

  useEffect((poke = pokemon) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${poke}/`)
        .then(response => (response.json()))
        .then(data => setPokesprite(data.sprites.front_default)) 
  }, []);
  
  useEffect((poke = pokemon) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${poke}/`)
        .then(response => (response.json()))
        .then(dados => setPokelista(dados.forms))
  }, []);

  const chama=()=>{
    return(
      <img src={pokesprite}/>
    )
  }

  //console.log(pokesprite)
  //console.log(pokelista)

  return (
    <div className="App">    
      <h1>LISTAGEM:</h1>
      { 
      pokelista.map((results) => 
        <div className='Poke' key={results.name}>  
          <h1>{ results.name }</h1>
          <p>{ results.url}</p>
          {chama()}
        </div>) 
      }
      

    </div>
  );
}