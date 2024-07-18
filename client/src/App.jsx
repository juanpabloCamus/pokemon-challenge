import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { PokemonsSelect } from './components/PokemonsSelect.jsx';
import { Arena } from './components/Arena.jsx';
import { Loader } from './components/Loader.jsx';

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3007/pokemon')
      .then((response) => response.json())
      .then((data) => {
        setPokemons(data);
      });
  }, []);

  if (pokemons.length === 0) {
    return <Loader />;
  }

  return (
    <div id="app-container">
      <Typography variant="h4" align="left">
        Battle of Pokemon
      </Typography>
      <Typography variant="h5" marginTop={2} marginBottom={2} align="left">
        Select your pokemon
      </Typography>
      <PokemonsSelect pokemons={pokemons} />
      <Box
        mt={4}
        mb={4}
        textAlign="center"
        sx={{
          backgroundColor: '#e4f9fe',
          border: '1px solid black',
          borderRadius: '5px',
          padding: '15px 30px',
        }}
      >
        <Typography variant="h5" align="left">
          Pikachu wins!
        </Typography>
      </Box>
      <Arena pokemon1={pokemons[0]} pokemon2={pokemons[1]} />
    </div>
  );
}

export default App;
