import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pokemon } from './pokemon.entity';
import { Repository } from 'typeorm';
import * as Pokemons from '../../../pokemon.json';

@Injectable()
export class PokemonService {
  constructor(
    @InjectRepository(Pokemon)
    private pokemonRepository: Repository<Pokemon>,
  ) {}

  /**
   * Retrieves all Pokemon entities from the repository.
   * @returns {Promise<Pokemon[]>} A promise that resolves to an array of Pokemon entities.
   */
  async getPokemons(): Promise<Pokemon[]> {
    // const pokemonEntities = Pokemons.pokemon.map((pokemon) => ({
    //   name: pokemon.name,
    //   attack: pokemon.attack,
    //   defense: pokemon.defense,
    //   hp: pokemon.hp,
    //   speed: pokemon.speed,
    //   imageUrl: pokemon.imageUrl,
    // }));

    // console.log(pokemonEntities);

    // await this.pokemonRepository.save(pokemonEntities);

    return await this.pokemonRepository.find();
  }
}
