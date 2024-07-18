import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from '@mui/material';

export const PokemonsSelect = ({ pokemons, selectPokemon }) => {
  return (
    <Grid
      container
      gap={1}
      justifyContent="space-between"
      alignItems="center"
      sx={{ height: '100%' }}
      mb={4}
    >
      {pokemons.map((pokemon) => (
        <Card key={pokemon.id} onClick={() => selectPokemon(pokemon)}>
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
  );
};
