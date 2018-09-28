import {Component, Input, OnInit} from '@angular/core';
import { Standing} from '../../shared/model';
import {StandingType} from '../../shared/enum';

@Component({
  selector: 'app-table-cl',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableClComponent implements OnInit {

  @Input()standings: Standing[];
  tables = [];
  loading = false;

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.standings.filter(value => value.type === StandingType.TOTAL)
      .map((val: Standing) => this.tables.push(val));
  }

}
