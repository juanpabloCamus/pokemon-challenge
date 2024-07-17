import { IsInt, IsString, IsUrl, Max, Min } from 'class-validator';

export class PokemonDto {
  @IsInt()
  id: number;

  @IsString()
  name: string;

  @IsInt()
  @Min(0)
  @Max(100)
  attack: number;

  @IsInt()
  @Min(0)
  @Max(100)
  defense: number;

  @IsInt()
  @Min(0)
  @Max(100)
  hp: number;

  @IsInt()
  @Min(0)
  @Max(100)
  speed: number;

  @IsUrl()
  imageUrl: string;
}
