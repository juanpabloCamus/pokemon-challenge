import { Module } from '@nestjs/common';
import { PokemonModule } from './pokemon/pokemon.module';
import { BattlesModule } from './battle/battles.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pokemon } from './pokemon/pokemon.entity';

@Module({
  imports: [
    PokemonModule,
    BattlesModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: '../db.db',
      entities: [Pokemon],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Pokemon]),
  ],
})
export class AppModule {}
