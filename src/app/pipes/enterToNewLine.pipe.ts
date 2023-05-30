import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enterToNewLine',
})
export class EnterToNewLinePipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(/\r?\n/g, '%0D%0A');
  }
}
