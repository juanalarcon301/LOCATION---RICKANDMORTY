import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'localidad'
})
export class LocalidadPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
