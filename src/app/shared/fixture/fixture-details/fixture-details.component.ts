import {Component, OnInit} from '@angular/core';
import {Durations, Leagues} from '../../enum';
import {Competition, Fixture, StatusType} from '../../model';
import {FootApiService} from '../../foot-api.service';
import {CommonService} from '../../common.service';
import {catchError, tap} from 'rxjs/operators';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-fixture-details',
  templateUrl: './fixture-details.component.html',
  styleUrls: ['./fixture-details.component.scss']
})
export class FixtureDetailsComponent implements OnInit {

  fixture: Fixture;
  statusType = StatusType;
  durationsTypes = Durations;
  subscribtions: Subscription[] = [];
  leagues = Leagues;
  loading = false;
  error = false;

  constructor(
    private apiService: FootApiService,
    private route: ActivatedRoute,
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.subscribtions.push(this.route.params.subscribe(param => {
      const league = Object.values(this.leagues).find((val) => val.path === param.leaguePath);
      const matchId =  param.matchId;
      this.getMatche(league.id, matchId);
    }));
  }

  getMatche(competitionId, matchId): void {
    this.loading = true;
    this.subscribtions.push(this.apiService.getMatche(competitionId, matchId)
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
        this.fixture = <Fixture>data;
      }));
  }

  isHomeWinner() {
    if (this.fixture.score.fullTime.homeTeam > this.fixture.score.fullTime.awayTeam) {
      return true;
    } else if (this.fixture.score.extraTime.homeTeam > this.fixture.score.extraTime.awayTeam) {
      return true;
    } else if (this.fixture.score.penalties.homeTeam > this.fixture.score.penalties.awayTeam) {
      return true;
    }
  }

  isAwayWinner() {
    if (this.fixture.score.fullTime.homeTeam < this.fixture.score.fullTime.awayTeam) {
      return true;
    } else if (this.fixture.score.extraTime.homeTeam < this.fixture.score.extraTime.awayTeam) {
      return true;
    } else if (this.fixture.score.penalties.homeTeam < this.fixture.score.penalties.awayTeam) {
      return true;
    }
  }

}
