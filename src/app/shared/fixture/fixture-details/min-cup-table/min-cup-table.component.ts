import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { CompetitionResponse, Standing, TableTeam } from '../../../model';
import { FootApiService } from '../../../foot-api.service';
import { Cups, StandingType } from '../../../enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-min-cup-table',
  templateUrl: './min-cup-table.component.html',
  styleUrls: ['./min-cup-table.component.scss']
})
export class MinCupTableComponent implements OnInit {

  standing$: Observable<TableTeam[]>;
  competitionResponse$: Observable<CompetitionResponse>;
  @Input()competitionId: string;
  @Input()homeTeamId: string;
  @Input()awayTeamId: string;
  @Input()group: string;
  groupId: string;
  Cups = Cups;
  constructor(
    private apiService: FootApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.groupId = this.group.replace(' ', '_').toUpperCase();
    this.getCompetitionGroup(this.competitionId);
  }

  getCompetitionGroup(competitionId): void {
    this.competitionResponse$ = this.apiService.getCompetitionStandings(competitionId);
    this.standing$ = this.competitionResponse$.pipe(
      map((data: CompetitionResponse) => data.standings),
      map((standings: Standing[]) => standings.filter(value => value.type === StandingType.TOTAL)),
      map((standings: Standing[]) => standings.find(value => value.group === this.groupId)),
      map((standig: Standing) => standig.table)
    );
  }

  isHighlight(table) {
    return (table.team.id === this.homeTeamId || table.team.id === this.awayTeamId);
  }

  showCompleteTable() {
    const leaguePath = Object.values(this.Cups).find(data => data.id === this.competitionId).path;
    this.router.navigate(['cup', leaguePath, 'standing']);
  }

}
