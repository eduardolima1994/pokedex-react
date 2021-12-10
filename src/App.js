import React,{useState, useEffect} from 'react';
import './App.css';

export default function App() {

  const [pokelista, setPokelista] = useState([])
  const [pokesprite, setPokesprite] = useState([])


  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=1118&offset=0')
        .then(response => (response.json()))
        .then(data => setPokelista(data.results));
  }, []);

  useEffect((pokelist = 'bulbasaur') => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokelist}/`)
        .then(response => (response.json()))
        .then(data => setPokesprite(data.sprites));

  }, []);

  const chama=()=>{
    return(
      <img src={pokesprite.front_default}/>
    )
  }

  console.log(pokesprite)

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