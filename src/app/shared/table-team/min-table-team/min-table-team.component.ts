import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TableTeam } from '../../model';

@Component({
  selector: 'app-min-table-team',
  templateUrl: './min-table-team.component.html',
  styleUrls: ['./min-table-team.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MinTableTeamComponent {

  @Input() teamTable: TableTeam;
}
