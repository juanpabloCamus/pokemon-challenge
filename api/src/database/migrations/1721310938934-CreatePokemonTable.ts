import { MigrationInterface, QueryRunner } from 'typeorm';
import * as PokemonData from '../../../../pokemon.json';
import { Pokemon } from '../../pokemon/pokemon.entity';

export class CreatePokemonTable1626481234567 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE IF NOT EXISTS pokemon (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        attack INT NOT NULL,
        defense INT NOT NULL,
        hp INT NOT NULL,
        speed INT NOT NULL,
        imageUrl VARCHAR(255) NOT NULL
        );
    `);

    const pokemonEntities = PokemonData.pokemon.map((pokemon) => ({
      name: pokemon.name,
      attack: pokemon.attack,
      defense: pokemon.defense,
      hp: pokemon.hp,
      speed: pokemon.speed,
      imageUrl: pokemon.imageUrl,
    }));

    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into(Pokemon)
      .values(pokemonEntities)
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS pokemon;`);
  }
}
