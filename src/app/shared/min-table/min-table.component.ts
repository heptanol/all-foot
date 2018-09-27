import {Component, Input, OnInit} from '@angular/core';
import {Competition, Standing} from '../model';
import {catchError, tap} from 'rxjs/operators';
import {Subscription} from 'rxjs/Subscription';
import {Leagues} from '../enum';
import {CommonService} from '../common.service';
import {ActivatedRoute} from '@angular/router';
import {FootApiService} from '../foot-api.service';

@Component({
  selector: 'app-min-table',
  templateUrl: './min-table.component.html',
  styleUrls: ['./min-table.component.scss']
})
export class MinTableComponent implements OnInit {

  standings: any[];
  subscribtions: Subscription[] = [];
  leagues = Leagues;
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
      .subscribe(data => {
        this.standings = data.standings[0].table;
      }));
  }

  isHighlight(table) {
    return (table.team.id == this.homeTeamId || table.team.id == this.awayTeamId);
  }

}
