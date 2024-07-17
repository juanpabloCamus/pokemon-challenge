import { Controller, Get } from '@nestjs/common';
import { PokemonService } from './pokemon.service';

@Controller('/pokemon')
export class PokemonController {
  constructor(private pokemonService: PokemonService) {}

  @Get()
  async getAllPokemons() {
    // Retrieve all Pokemon entities
    return await this.pokemonService.getPokemons();
  }
}
