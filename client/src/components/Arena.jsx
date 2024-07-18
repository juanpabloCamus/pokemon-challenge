import { Grid, Button, CardMedia, Typography, Card } from '@mui/material';
import { PokemonCard } from './PokemonCard.jsx';

export const Arena = ({ pokemon1, pokemon2, handleStartBattle }) => {
  return (
    <Grid
      container
      gap={2}
      justifyContent={{ xs: 'center', sm: 'space-between' }}
      alignItems="center"
      sx={{ height: '100%' }}
      direction={{ xs: 'column', sm: 'row' }}
    >
      <Grid item sm>
        <PokemonCard pokemon={pokemon1} />
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="success"
          sx={{ maxHeight: '50px' }}
          onClick={() => handleStartBattle()}
        >
          Start Battle
        </Button>
      </Grid>
      <Grid item sm>
        {pokemon2 === null ? (
          <Card
            sx={{
              flexGrow: 1,
              padding: '10px 10px',
            }}
          >
            <CardMedia
              component="img"
              image={
                'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/640px-Pokebola-pokeball-png-0.png'
              }
              alt={'pokeball'}
              sx={{
                width: '200px',
                height: '200px',
                objectFit: 'contain',
                margin: 'auto',
                marginBottom: '20px',
              }}
            />
            <Typography variant="h6" align="center">
              A random Pokémon will be selected as an opponent when starting a
              battle.
            </Typography>
          </Card>
        ) : (
          <PokemonCard pokemon={pokemon2} />
        )}
      </Grid>
    </Grid>
  );
};
