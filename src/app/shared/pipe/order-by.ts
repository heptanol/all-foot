import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'orderBy'})
export class OrderByPipe implements PipeTransform {
  transform(collection: Array<any>, property: any, orderType: 'ASC' | 'DESC'): Array<any> {
    if (collection) {
      collection.sort((a: any, b: any) => {
        if (a[property] > b[property]) {
          return (orderType === 'DESC') ? -1 : 1;
        } else if (a[property] < b[property]) {
          return (orderType === 'DESC') ? 1 : -1;
        } else {
          return 0;
        }
      });
    }
    return collection;
  }
}
