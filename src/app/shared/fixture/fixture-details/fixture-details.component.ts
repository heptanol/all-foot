import {Component, OnInit} from '@angular/core';
import {Match} from '../../model';
import {FootApiService} from '../../foot-api.service';
import {CommonService} from '../../common.service';
import {catchError, tap} from 'rxjs/operators';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute} from '@angular/router';
import {DurationType, StageType, StatusType} from '../../enum';
import {HeaderService} from '../../header/header.service';

@Component({
  selector: 'app-fixture-details',
  templateUrl: './fixture-details.component.html',
  styleUrls: ['./fixture-details.component.scss']
})
export class FixtureDetailsComponent implements OnInit {

  fixture: Match;
  statusType = StatusType;
  durationsTypes = DurationType;
  leagueId: string;
  subscribtions: Subscription[] = [];
  loading = false;
  error = false;
  StageType = StageType;

  constructor(
    private apiService: FootApiService,
    private route: ActivatedRoute,
    private commonService: CommonService,
    private headerService: HeaderService,
  ) { }

  ngOnInit() {
    this.subscribtions.push(this.route.params.subscribe(param => {
      this.leagueId = param.leaguePath;
      const matchId =  param.matchId;
      this.getMatche(this.leagueId, matchId);
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
        this.fixture = <Match>data;
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

  setSocialMediaData() {
    const title = this.fixture.homeTeam.name + ' VS ' + this.fixture.awayTeam.name;
    const descrb = this.fixture.homeTeam.name + ' VS ' + this.fixture.awayTeam.name
    + ', ' + new Date(this.fixture.utcDate).toDateString();
    this.headerService.setShareTitle(title);
    this.headerService.setShareDescription(descrb);
  }

}
