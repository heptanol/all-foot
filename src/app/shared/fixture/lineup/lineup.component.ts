import {Component, Input} from '@angular/core';
import {Team} from '../../model';

@Component({
  selector: 'app-lineup',
  templateUrl: './lineup.component.html',
  styleUrls: ['./lineup.component.scss']
})
export class LineupComponent {

  @Input() team: Team;
  constructor() { }

}
