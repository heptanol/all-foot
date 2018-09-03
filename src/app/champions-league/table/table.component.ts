import {Component, Input, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {FootApiService} from '../../shared/foot-api.service';
import {Competition} from '../../shared/model';
import {Subscription} from 'rxjs/Subscription';
import {catchError, map, tap, toArray} from 'rxjs/operators';
import {CommonService} from '../../shared/common.service';

@Component({
  selector: 'app-table-cl',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableClComponent implements OnInit, OnChanges, OnDestroy {

  @Input()competition: Competition;
  tables: any[];
  subscribtion: Subscription;
  matchDay: number;
  loading = false;
  error = false;
  constructor(
    private apiService: FootApiService,
    private commonService: CommonService
  ) {}

  ngOnInit() {
    this.getData(this.competition.id);
  }

  ngOnChanges() {
    this.getData(this.competition.id);
  }

  getData(competitionId) {
    this.matchDay = (this.competition.currentSeason.currentMatchday > 6) ? 6 : this.competition.currentSeason.currentMatchday;
    this.loading = true;
    this.subscribtion = this.apiService.getCompetitionTable(competitionId, this.matchDay)
      .pipe(
        tap(() => this.loading = false),
        catchError(err => {
          this.loading = false;
          this.error = true;
          this.commonService
            .openSnackBar('Un problème est survenue lors du chargement', 'fermer');
          return err;
        })
      ).pipe(
        map(data => data)
      )
      .subscribe(data => {
        this.tables = data;
      });
  }

  ngOnDestroy() {
    this.subscribtion.unsubscribe();
  }

}
