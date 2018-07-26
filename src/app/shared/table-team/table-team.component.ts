import {Component, Input, OnInit} from '@angular/core';
import {TableTeam} from '../model';

@Component({
  selector: 'app-table-team',
  templateUrl: './table-team.component.html',
  styleUrls: ['./table-team.component.scss']
})
export class TableTeamComponent {

  @Input()team: TableTeam;
  constructor() { }

}
