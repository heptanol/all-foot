import {Component, Input, OnInit} from '@angular/core';
import {catchError, tap} from 'rxjs/operators';
import {Subscription} from 'rxjs/Subscription';
import {Leagues, StandingType} from '../enum';
import {CommonService} from '../common.service';
import {ActivatedRoute} from '@angular/router';
import {FootApiService} from '../foot-api.service';
import {CompetitionResponse, Standing, TableTeam} from '../model';

@Component({
  selector: 'app-min-table',
  templateUrl: './min-table.component.html',
  styleUrls: ['./min-table.component.scss']
})
export class MinTableComponent implements OnInit {

  standings: TableTeam[];
  subscribtions: Subscription[] = [];
  competitionName: string;
  loading = false;
  error = false;
  @Input()competitionId: string;
  @Input()homeTeamId: string;
  @Input()awayTeamId: string;
  constructor(
    private apiService: FootApiService,
    private route: ActivatedRoute,
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.getCompetition(this.competitionId);
  }

  getCompetition(competitionId): void {
    this.loading = true;
    this.subscribtions.push(this.apiService.getCompetitionStandings(competitionId)
      .pipe(
        tap(() => this.loading = false),
        catchError(err => {
          this.loading = false;
          this.error = true;
          this.commonService
            .openSnackBar('Un problème est survenue lors du chargement', 'fermer');
          return err;
        })
      )
      .subscribe((competition: CompetitionResponse) => {
        this.competitionName = competition.competition.name;
        competition.standings.filter(value => value.type === StandingType.TOTAL)
          .map((val: Standing) => this.standings = val.table);
        }));
  }

  isHighlight(table) {
    return (table.team.id === this.homeTeamId || table.team.id === this.awayTeamId);
  }

}
