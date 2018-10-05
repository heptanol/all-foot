import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FootApiService} from '../shared/foot-api.service';
import {Competition, CompetitionConfig, CompetitionResponse} from '../shared/model';
import {Subscription} from 'rxjs/Subscription';
import {catchError, tap} from 'rxjs/operators';
import {CommonService} from '../shared/common.service';
import {Leagues} from '../shared/enum';
import {HeaderService} from '../shared/header/header.service';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.scss']
})
export class LeaguesComponent implements OnInit, OnDestroy {

  competition: CompetitionResponse;
  subscribtions: Subscription[] = [];
  leagues = Leagues;
  loading = false;
  error = false;
  constructor(
    private apiService: FootApiService,
    private route: ActivatedRoute,
    private commonService: CommonService,
    private headerService: HeaderService
  ) { }

  ngOnInit() {
    this.handlePath();
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
        console.log('competition');
        this.competition = competition;
        this.commonService.setCompetition(competition);
        this.headerService.setSubTitle(this.competition.competition.name);
      }));
  }

  handlePath() {
    this.subscribtions.push(this.route.params.subscribe(param => {
      const comp = Object.values(this.leagues).find((val) => val.path === param.leaguePath);
      console.log('handlepath');
      this.getCompetition(comp.id);
    }));
  }

  ngOnDestroy() {
    this.subscribtions.forEach(sub => sub.unsubscribe());
  }
}
