import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitWord'
})
export class LimitWordPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    
    let limit = args
    let trail = args.length > 1 ? args[1] : '...';
    return value.length > limit ? value.substring(0, limit) + trail : value;
  }

}
