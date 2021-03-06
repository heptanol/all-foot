import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Standing, TableTeam } from '../../shared/model';
import { CommonService } from '../../shared/common.service';
import { StandingType } from '../../shared/enum';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit {

  standings: Standing[];
  tables: TableTeam[];
  constructor(
    private commonService: CommonService
  ) {}

  ngOnInit() {
    this.standings = this.commonService.getCompetition().standings;
    this.getData();
  }

  getData() {
    this.standings.filter(value => value.type === StandingType.TOTAL)
      .map((val: Standing) => this.tables = val.table);
  }

}
