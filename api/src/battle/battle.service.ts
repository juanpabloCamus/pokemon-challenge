import { Injectable } from '@nestjs/common';
import { Battle } from './battle.entitiy';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BattleService {
  constructor(
    @InjectRepository(Battle)
    private battleRepository: Repository<Battle>,
  ) {}

  /**
   * Retrieves all Battle entities from the repository.
   * @returns {Promise<Battle[]>} A promise that resolves to an array of Battle entities.
   */
  async getBattles(): Promise<Battle[]> {
    return await this.battleRepository.find();
  }

  /**
   * Saves a new battle record in the repository.
   * @param {PokemonDto} pokemon1 - The first Pokemon participating in the battle.
   * @param {PokemonDto} pokemon2 - The second Pokemon participating in the battle.
   * @param {PokemonDto} winner - The winning Pokemon of the battle.
   * @returns {Promise<Battle>} A promise that resolves to the saved Battle entity.
   */
  async saveBattle(pokemon1, pokemon2, winner) {
    return await this.battleRepository.save({
      pokemon1: pokemon1.id,
      pokemon2: pokemon2.id,
      winner: winner.id,
    });
  }
}
