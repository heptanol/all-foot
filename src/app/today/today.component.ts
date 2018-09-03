import {Component, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {FootApiService} from '../shared/foot-api.service';
import {CommonService} from '../shared/common.service';
import {Subscription} from 'rxjs/Subscription';
import {catchError, tap} from 'rxjs/operators';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnInit, OnDestroy, OnChanges {
  fixtures: any[];
  subscribtion: Subscription;
  loading = false;
  error = false;
  constructor(
    private apiService: FootApiService,
    private commonService: CommonService
  ) {}

  ngOnInit() {
    this.getData();
  }

  ngOnChanges() {
    this.getData();
  }

  getData() {
    this.loading = true;
    this.subscribtion = this.apiService.getTodayMatches()
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