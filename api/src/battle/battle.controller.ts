import { Body, Controller, Get, Post } from '@nestjs/common';
import { BattleService } from './battle.service';
import { calculateWinner } from './battle.utils';

@Controller('/battle')
export class BattleController {
  constructor(private battleService: BattleService) {}

  @Get()
  getBattles() {
    return this.battleService.getBattles();
  }

  @Post()
  postBattle(@Body() body) {
    const [pokemon1, pokemon2] = body;

    // Calculate the winner
    const winner = calculateWinner(pokemon1, pokemon2);
    return winner;
    return this.battleService.saveBattle(pokemon1, pokemon2, winner);
  }
}
