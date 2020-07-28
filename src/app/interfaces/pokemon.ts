import { TypesEnum } from '../enums/types.enum';

export interface Pokemon {
  name: string;
  id: number;
  spriteUrl: string;
  order: number;
  types: TypesEnum[];
}
