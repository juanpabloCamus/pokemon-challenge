import { Pokemon } from 'src/pokemon/pokemon.entity';

// Function to calculate the winner of a battle between two Pokémon
export function calculateWinner(pokemon1: Pokemon, pokemon2: Pokemon) {
  // Determine attack order based on speed and attack
  let firstAttacker, secondAttacker;
  if (pokemon1.speed > pokemon2.speed) {
    firstAttacker = pokemon1;
    secondAttacker = pokemon2;
  } else if (pokemon2.speed > pokemon1.speed) {
    firstAttacker = pokemon2;
    secondAttacker = pokemon1;
  } else {
    // In case of tie in speed, determine by attack
    if (pokemon1.attack >= pokemon2.attack) {
      firstAttacker = pokemon1;
      secondAttacker = pokemon2;
    } else {
      firstAttacker = pokemon2;
      secondAttacker = pokemon1;
    }
  }

  // Begin battle
  let currentPokemon = firstAttacker;
  let opponentPokemon = secondAttacker;

  while (currentPokemon.hp > 0 && opponentPokemon.hp > 0) {
    // Calculate damage
    const damage = Math.max(1, currentPokemon.attack - opponentPokemon.defense);

    // Apply damage to opponent
    opponentPokemon.hp -= damage;

    // Swap roles for the next turn
    const temp = currentPokemon;
    currentPokemon = opponentPokemon;
    opponentPokemon = temp;
  }

  // Determine the winner
  if (firstAttacker.hp > 0) {
    return firstAttacker;
  } else {
    return secondAttacker;
  }
}
