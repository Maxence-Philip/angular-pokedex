import { Pipe, PipeTransform } from '@angular/core';
import { TypesEnum } from '../enums/types.enum';

@Pipe({
  name: 'types',
})
export class TypesPipe implements PipeTransform {
  transform(types: TypesEnum[]): string {
    return types.join(', ');
  }
}
