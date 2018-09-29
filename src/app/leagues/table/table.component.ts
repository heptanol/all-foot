import {AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {FootApiService} from '../../shared/foot-api.service';
import {Competition, Standing, TableTeam} from '../../shared/model';
import {Subscription} from 'rxjs/Subscription';
import {catchError, map, tap} from 'rxjs/operators';
import {CommonService} from '../../shared/common.service';
import {StandingType} from '../../shared/enum';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit {

  @Input()standings: Standing[];
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

  ngAfterViewInit(): void {
  }

}
