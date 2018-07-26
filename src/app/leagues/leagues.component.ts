import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FootApiService} from '../shared/foot-api.service';
import {Competition} from '../shared/model';
import {Subscription} from 'rxjs/Subscription';
import {catchError, tap} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material';
import {CommonService} from '../shared/common.service';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.scss']
})
export class LeaguesComponent implements OnInit, OnDestroy {

  competition: Competition;
  matchDay: number;
  subscribtions: Subscription[] = [];
  loading = false;
  error = false;
  constructor(
    private apiService: FootApiService,
    private route: ActivatedRoute,
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.subscribtions.push(this.route.params.subscribe(param => {
      this.getCompetition(param.leagueId);
    }));
  }

  getCompetition(competitionId): void {
    this.loading = true;
    this.subscribtions.push(this.apiService.getCompetition(competitionId)
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
        console.log(data);
        this.competition = <Competition>data;
        this.matchDay = data['currentSeason']['currentMatchday'];
      }));
  }

  getAllCompetitions() {
    this.subscribtions.push(this.apiService.getCompetitions().subscribe());
  }

  ngOnDestroy() {
    this.subscribtions.forEach(sub => sub.unsubscribe());
  }
}
