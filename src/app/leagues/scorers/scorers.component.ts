import {Component, Input, OnInit} from '@angular/core';
import {CompetitionResponse, ScorerTable} from '../../shared/model';
import {FootApiService} from '../../shared/foot-api.service';
import {catchError, tap} from 'rxjs/operators';
import {CommonService} from '../../shared/common.service';

@Component({
  selector: 'app-scorers',
  templateUrl: './scorers.component.html',
  styleUrls: ['./scorers.component.scss']
})
export class ScorersComponent implements OnInit {
  @Input()competition: CompetitionResponse;
  scorers: ScorerTable[];
  loading = false;
  error = false;


  constructor(
    private apiService: FootApiService,
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.competition = this.commonService.getCompetition();
    this.getData();
  }

  getData() {
    this.loading = true;
    this.apiService.getCompetitionScorers(this.competition.competition.id)
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
        this.scorers = data.scorers;
      });
  }

}
