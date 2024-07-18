import { Body, Controller, Get, Post } from '@nestjs/common';
import { BattleService } from './battle.service';
import { calculateWinner } from './battle.utils';
import { PokemonDto } from 'src/pokemon/dto/pokemon.dto';

@Controller('/battle')
export class BattleController {
  constructor(private battleService: BattleService) {}

  @Get()
  getBattles() {
    // Retrieve all battles
    return this.battleService.getBattles();
  }

  @Post()
  async postBattle(@Body() body: PokemonDto[]) {
    const [pokemon1, pokemon2] = body;
    // Calculate the winner
    const winner = calculateWinner(pokemon1, pokemon2);

    // Save the battle
    await this.battleService.saveBattle(pokemon1, pokemon2, winner);

    // Return the winner
    return winner;
  }
}
