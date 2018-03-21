import {Component, Input, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {FootApiService} from '../../shared/foot-api.service';
import {Competition, Ranking} from '../../shared/model';
import {Subscription} from 'rxjs/Subscription';
import {catchError, tap} from 'rxjs/operators';
import {CommonService} from '../../shared/common.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnChanges, OnDestroy {

  @Input()competition: Competition;
  tables: Ranking[];
  subscribtion: Subscription;
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
    this.loading = true;
    this.subscribtion = this.apiService.getCompetitionTable(competitionId)
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
        this.tables = <Ranking[]>data;
      });
  }

  ngOnDestroy() {
    this.subscribtion.unsubscribe();
  }

}
