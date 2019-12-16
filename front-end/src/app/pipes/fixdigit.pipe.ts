import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fixdigit'
})
export class FixdigitPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return parseFloat(value).toFixed(2);
  }

}
