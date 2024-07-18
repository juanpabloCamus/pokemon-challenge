import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Divider,
  LinearProgress,
} from '@mui/material';
import { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

const normalise = (value) => ((value - 0) * 100) / (7 - 0);

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

export const PokemonCard = ({ pokemon }) => (
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
