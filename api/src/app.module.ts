import { Module } from '@nestjs/common';
import { PokemonModule } from './pokemon/pokemon.module';
import { BattlesModule } from './battle/battles.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pokemon } from './pokemon/pokemon.entity';
import { Battle } from './battle/battle.entitiy';

@Module({
  imports: [
    PokemonModule,
    BattlesModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './src/database/database.sqlite',
      entities: [Pokemon, Battle],
      synchronize: true,
      migrations: ['dist/api/src/database/migrations/*.js'],
      migrationsRun: true,
    }),
    TypeOrmModule.forFeature([Pokemon, Battle]),
  ],
})
export class AppModule {}
