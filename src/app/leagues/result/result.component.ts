import {Component, Input, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {FootApiService} from '../../shared/foot-api.service';
import {Subscription} from 'rxjs/Subscription';
import {Competition} from '../../shared/model';
import {catchError, tap} from 'rxjs/operators';
import {CommonService} from '../../shared/common.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit, OnDestroy, OnChanges {
  @Input()competition: Competition;
  matchDay: number;
  fixtures: any[];
  subscribtion: Subscription;
  loading = false;
  error = false;
  constructor(
    private apiService: FootApiService,
    private commonService: CommonService
  ) {}

  ngOnInit() {
    this.getData(this.competition.id, this.competition.currentSeason.currentMatchday);
  }

  ngOnChanges() {
    this.getData(this.competition.id, this.competition.currentSeason.currentMatchday);
  }

  getData(competitionId, matchday) {
    this.matchDay = matchday;
    this.loading = true;
    this.subscribtion = this.apiService.getMatches(competitionId, matchday)
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
        this.fixtures = data;
      });
  }

  ngOnDestroy() {
    this.subscribtion.unsubscribe();
  }


}
