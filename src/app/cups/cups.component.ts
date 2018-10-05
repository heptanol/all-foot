import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FootApiService} from '../shared/foot-api.service';
import {Competition, CompetitionConfig, CompetitionResponse} from '../shared/model';
import {Subscription} from 'rxjs/Subscription';
import {catchError, tap} from 'rxjs/operators';
import {CommonService} from '../shared/common.service';
import {Cups} from '../shared/enum';
import {HeaderService} from '../shared/header/header.service';

@Component({
  selector: 'app-cups',
  templateUrl: './cups.component.html',
  styleUrls: ['./cups.component.scss']
})
export class CupsComponent implements OnInit, OnDestroy {

  competition: CompetitionResponse;
  cometitionConfig: CompetitionConfig;
  matchDay: number;
  subscribtions: Subscription[] = [];
  cups = Cups;
  loading = false;
  error = false;
  constructor(
    private apiService: FootApiService,
    private route: ActivatedRoute,
    private commonService: CommonService,
    private headerService: HeaderService
  ) { }

  ngOnInit() {
    this.subscribtions.push(this.route.params.subscribe(param => {
      this.cometitionConfig = Object.values(this.cups).find((val) => val.path === param.cupPath);
      this.commonService.setCompetitionConfig(this.cometitionConfig);
      this.getCompetition(this.cometitionConfig.id);
    }));
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
      .subscribe(competition => {
        this.competition = competition;
        this.commonService.setCompetition(competition);
        this.headerService.setSubTitle(this.competition.competition.name);
      }));
  }

  ngOnDestroy() {
    this.subscribtions.forEach(sub => sub.unsubscribe());
  }
}
