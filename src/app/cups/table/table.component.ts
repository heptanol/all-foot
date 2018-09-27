import {Component, Input, OnInit} from '@angular/core';
import { Standing} from '../../shared/model';

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
    this.standings.filter(value => value.type === 'TOTAL')
      .map(val => this.tables.push(val));
  }

}
