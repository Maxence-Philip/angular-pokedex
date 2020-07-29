import { TypesEnum } from '../enums/types.enum';

export interface Pokemon {
  name: string;
  id: number;
  spriteUrl: string;
  types: TypesEnum[];
}
