import { Grid, Button } from '@mui/material';
import { PokemonCard } from './PokemonCard.jsx';

export const Arena = ({ pokemon1, pokemon2 }) => {
  return (
    <Grid
      container
      gap={2}
      justifyContent="space-between"
      alignItems="center"
      sx={{ height: '100%' }}
    >
      <Grid item xs>
        <PokemonCard pokemon={pokemon1} />
      </Grid>
      <Grid item>
        <Button variant="contained" color="success" sx={{ maxHeight: '50px' }}>
          Start Battle
        </Button>
      </Grid>
      <Grid item xs>
        <PokemonCard pokemon={pokemon2} />
      </Grid>
    </Grid>
  );
};
