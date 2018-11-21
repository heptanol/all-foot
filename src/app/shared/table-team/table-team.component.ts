import {Component, Input} from '@angular/core';
import {TableTeam} from '../model';

@Component({
  selector: 'app-table-team',
  templateUrl: './table-team.component.html',
  styleUrls: ['./table-team.component.scss']
})
export class TableTeamComponent {

  @Input() teamTable: TableTeam;
}

