import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {FootApiService} from '../../shared/foot-api.service';
import {Competition, Ranking} from '../../shared/model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnChanges {

  @Input()competition: Competition;
  tables: Ranking[];
  heading = [
  'goalDifference',
  'goals',
  'goalsAgainst',
  'playedGames',
  'points',
  'rank',
  'team',
  ];
  constructor(
    private apiService: FootApiService,
  ) {}

  ngOnInit() {
    this.getData(this.competition.id);
  }

  ngOnChanges() {
    this.getData(this.competition.id);
  }

  getData(competitionId) {
    this.subscribtion = this.apiService.getCompetitionTable(competitionId)
      .subscribe(data => {
        this.tables = data;
      });
  }

}
