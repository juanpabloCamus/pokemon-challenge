/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
  CardMedia,
  LinearProgress,
  CardActionArea,
  Divider,
} from '@mui/material';
import { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import './App.css';

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
    return <div>Loading...</div>;
  }

  return (
    <div id="app-container">
      <Typography variant="h4" align="left">
        Battle of Pokemon
      </Typography>
      <Typography variant="h5" marginTop={2} marginBottom={2} align="left">
        Select your pokemon
      </Typography>
      <Grid
        container
        gap={1}
        justifyContent="space-between"
        alignItems="center"
        sx={{ height: '100%' }}
      >
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id}>
            <CardActionArea>
              <CardMedia
                component="img"
                image={pokemon.imageUrl}
                alt={pokemon.name}
                sx={{
                  width: '200px',
                  height: '150px',
                  objectFit: 'contain',
                  margin: 'auto',
                }}
              />
              <CardContent>
                <Typography variant="h6" align="left">
                  {pokemon.name}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Grid>
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
      <Grid
        container
        gap={2}
        justifyContent="space-between"
        alignItems="center"
        sx={{ height: '100%' }}
      >
        <Grid item xs>
          <PokemonCard pokemon={pokemons[0]} />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="success"
            sx={{ maxHeight: '50px' }}
          >
            Start Battle
          </Button>
        </Grid>
        <Grid item xs>
          <PokemonCard pokemon={pokemons[1]} />
        </Grid>
      </Grid>
    </div>
  );
}
const normalise = (value) => ((value - 0) * 100) / (10 - 0);

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#75fc4d',
  },
}));

const PokemonCard = ({ pokemon }) => (
  <Card sx={{ flexGrow: 1 }}>
    <CardMedia
      component="img"
      image={pokemon.imageUrl}
      alt={pokemon.name}
      sx={{
        width: '250px',
        height: '250px',
        objectFit: 'contain',
        margin: 'auto',
      }}
    />
    <CardContent>
      <Typography variant="h5" align="left">
        {pokemon.name}
      </Typography>
      <Divider />
      <Box mt={2}>
        <Typography variant="body1">HP</Typography>
        <BorderLinearProgress
          variant="determinate"
          value={normalise(pokemon.hp)}
        />
        <Typography variant="body1">Attack</Typography>
        <BorderLinearProgress
          variant="determinate"
          value={normalise(pokemon.attack)}
        />
        <Typography variant="body1">Defense</Typography>
        <BorderLinearProgress
          variant="determinate"
          value={normalise(pokemon.defense)}
        />
        <Typography variant="body1">Speed</Typography>
        <BorderLinearProgress
          variant="determinate"
          value={normalise(pokemon.speed)}
        />
      </Box>
    </CardContent>
  </Card>
);

export default App;
