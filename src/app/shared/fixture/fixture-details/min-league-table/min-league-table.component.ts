import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { CompetitionResponse, Standing, TableTeam } from '../../../model';
import { FootApiService } from '../../../foot-api.service';
import { StandingType, Leagues } from '../../../enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-min-league-table',
  templateUrl: './min-league-table.component.html',
  styleUrls: ['./min-league-table.component.scss']
})
export class MinLeagueTableComponent implements OnInit {

  standings$: Observable<TableTeam[]>;
  competitionResponse$: Observable<CompetitionResponse>;
  Leagues = Leagues;
  @Input()competitionId: string;
  @Input()homeTeamId: string;
  @Input()awayTeamId: string;
  constructor(
    private apiService: FootApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getCompetition(this.competitionId);
  }

  getCompetition(competitionId): void {
    this.competitionResponse$ = this.apiService.getCompetitionStandings(competitionId);
    this.standings$ = this.competitionResponse$.pipe(
      map((data: CompetitionResponse) => data.standings),
      map((standings: Standing[]) => standings.find(value => value.type === StandingType.TOTAL)),
      map((standig: Standing) => standig.table)
    );
  }

  isHighlight(table) {
    return (table.team.id === this.homeTeamId || table.team.id === this.awayTeamId);
  }

  showCompleteTable() {
    const leaguePath = Object.values(this.Leagues).find(data => data.id === this.competitionId).path;
    this.router.navigate(['league', leaguePath, 'standing']);
  }

}
