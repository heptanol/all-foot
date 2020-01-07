import {Pipe, PipeTransform} from '@angular/core';
import {PlayerPosition} from '../../enum';
import {Player} from '../../model';

const sortPlayer = {};
sortPlayer[PlayerPosition.Goalkeeper] = 1;
sortPlayer[PlayerPosition.Defender] = 2;
sortPlayer[PlayerPosition.Midfielder] = 3;
sortPlayer[PlayerPosition.Attacker] = 4;

@Pipe({name: 'sortLineUp'})
export class SortLineUpPipe implements PipeTransform {
  transform(collection: Array<any>, property: any): Array<any> {
    if (collection) {
      collection.sort((a: Player, b: Player) => {
        if (sortPlayer[a.position] > sortPlayer[b.position]) {
          return 1;
        } else if (sortPlayer[a.position] < sortPlayer[b.position]) {
          return -1;
        } else {
          return 0;
        }
      });
    }
    return collection;
  }
}
