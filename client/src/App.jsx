import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { PokemonsSelect } from './components/PokemonSelect.jsx';
import { Arena } from './components/Arena.jsx';
import { Loader } from './components/Loader.jsx';
import LastBattlesModal from './components/LastBattlesModal.jsx';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon1, setSelectedPokemon1] = useState(null);
  const [selectedPokemon2, setSelectedPokemon2] = useState(null);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3007/pokemon')
      .then((response) => response.json())
      .then((data) => {
        setPokemons(data);
        setSelectedPokemon1(data[0]);
      });
  }, []);

  if (pokemons.length === 0) {
    return <Loader />;
  }

  const handleStartBattle = () => {
    //Choose a random pokemon
    const randomIndex = Math.floor(Math.random() * pokemons.length);
    let selectRandomPokemon;

    if (selectedPokemon1.id === pokemons[randomIndex].id) {
      return handleStartBattle();
    }

    selectRandomPokemon = pokemons[randomIndex];
    setSelectedPokemon2(selectRandomPokemon);

    fetch('http://localhost:3007/battle', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([selectedPokemon1, selectRandomPokemon]),
    })
      .then((response) => response.json())
      .then((data) => {
        setWinner(data);
      });
  };

  const handleSelectPokemon = (pokemon) => {
    // If the selected pokemon is the same as the first selected pokemon, unselect it
    if (pokemon.id === selectedPokemon2?.id) {
      setSelectedPokemon2(null);
    }

    // Clean the winner and select the first pokemon
    setWinner(null);
    setSelectedPokemon1(pokemon);
  };

  return (
    <div id="app-container">
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>
          <Typography variant="h4" align="left">
            Battle of Pokemon
          </Typography>
          <Typography variant="h5" mt={2} mb={2} align="left">
            Select your pokemon
          </Typography>
        </Box>
        <LastBattlesModal />
      </Box>
      <PokemonsSelect pokemons={pokemons} selectPokemon={handleSelectPokemon} />
      <Box
        mb={4}
        textAlign="center"
        sx={{
          backgroundColor: '#e4f9fe',
          border: '1px solid black',
          borderRadius: '5px',
          padding: '15px 30px',
          visibility: winner !== null ? 'visible' : 'hidden',
        }}
      >
        <Typography variant="h5" align="left">
          {winner?.name} wins!
        </Typography>
      </Box>
      <Arena
        pokemon1={selectedPokemon1}
        pokemon2={selectedPokemon2}
        handleStartBattle={handleStartBattle}
      />
    </div>
  );
}

export default App;
