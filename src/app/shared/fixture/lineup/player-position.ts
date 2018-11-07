import { Pipe, PipeTransform } from '@angular/core';
import { PlayerPosition } from '../../enum';

const positionCode = {};
positionCode[PlayerPosition.Goalkeeper] = 'player_position.GK';
positionCode[PlayerPosition.Defender] = 'player_position.DEF';
positionCode[PlayerPosition.Midfielder] = 'player_position.MID';
positionCode[PlayerPosition.Attacker] = 'player_position.ATT';

@Pipe({name: 'playerPosition'})
export class PlayerPositionPipe implements PipeTransform {
  transform(value: PlayerPosition): string {
    return positionCode[value];
  }
}
