import { Component, OnInit } from '@angular/core';
import {catchError, tap} from 'rxjs/operators';
import {TranslateService} from '@ngx-translate/core';
import {FootApiService} from '../shared/foot-api.service';
import {CommonService} from '../shared/common.service';
import {HeaderService} from '../shared/header/header.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-last-matches',
  templateUrl: './last-matches.component.html',
  styleUrls: ['./last-matches.component.scss']
})
export class LastMatchesComponent implements OnInit {
  fixtures: any[];
  subscribtion: Subscription;
  loading = false;
  error = false;
  constructor(
      private apiService: FootApiService,
      private commonService: CommonService,
      private headerService: HeaderService,
      private translateService: TranslateService
  ) { }

  ngOnInit() {
    this.getData();
  }

    getData() {
        this.loading = true;
        this.subscribtion = this.apiService.getLastImportantMatches()
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

}
