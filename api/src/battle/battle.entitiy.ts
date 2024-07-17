// src/battle/battle.entity.ts

import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Pokemon } from '../pokemon/pokemon.entity';

@Entity()
export class Battle {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Pokemon)
  @JoinColumn({ name: 'pokemon1Id' })
  pokemon1: Pokemon;

  @ManyToOne(() => Pokemon)
  @JoinColumn({ name: 'pokemon2Id' })
  pokemon2: Pokemon;

  @ManyToOne(() => Pokemon)
  @JoinColumn({ name: 'winnerId' })
  winner: Pokemon;
}
