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

  async getBattles() {
    return await this.battleRepository.find();
  }

  async saveBattle(pokemon1, pokemon2, winner) {
    return await this.battleRepository.save({
      pokemon1: pokemon1.id,
      pokemon2: pokemon2.id,
      winner: winner.id,
    });
  }
}
