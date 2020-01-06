import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Team } from '../../model';

@Component({
  selector: 'app-lineup',
  templateUrl: './lineup.component.html',
  styleUrls: ['./lineup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LineupComponent {

  @Input() team: Team;
  constructor() { }

}
