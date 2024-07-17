import { Module } from '@nestjs/common';
import { BattleController } from './battle.controller';
import { BattleService } from './battle.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Battle } from './battle.entitiy';

@Module({
  controllers: [BattleController],
  providers: [BattleService],
  imports: [TypeOrmModule.forFeature([Battle])],
})
export class BattlesModule {}
