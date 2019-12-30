import {Component, OnInit} from '@angular/core';
import {Match} from '../../model';
import {FootApiService} from '../../foot-api.service';
import {CommonService} from '../../common.service';
import {catchError, tap} from 'rxjs/operators';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute, Router} from '@angular/router';
import {DurationType, StageType, StatusType} from '../../enum';
import {HeaderService} from '../../header/header.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-fixture-details',
  templateUrl: './fixture-details.component.html',
  styleUrls: ['./fixture-details.component.scss']
})
export class FixtureDetailsComponent implements OnInit {

  fixture: Match;
  leagueId: string;
  subscribtions: Subscription[] = [];
  loading = false;
  error = false;
  statusType = StatusType;
  durationsTypes = DurationType;
  StageType = StageType;
  videoUrl: any;
  showVideo = false;

  constructor(
    private apiService: FootApiService,
    private route: ActivatedRoute,
    private router: Router,
    private commonService: CommonService,
    private headerService: HeaderService,
    private sanitizer: DomSanitizer
  ) {}

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
          this.router.navigate(['/not-found']);
          return err;
        })
      )
      .subscribe(data => {
        this.fixture = <Match>data;
        this.headerService.setSubTitle(this.generateTitle());
        if (this.fixture.status === StatusType.FINISHED) {
          this.updateVideoUrl(this.generateMatchSearchWord());
        }
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

  generateTitle(): string {
    return this.fixture.homeTeam.name + ' - ' + this.fixture.awayTeam.name;
  }

  generateMatchSearchWord(): string {
    return this.fixture.homeTeam.name + ' ' +
      this.fixture.score.fullTime.homeTeam + '-' + this.fixture.score.fullTime.awayTeam + ' ' +
      this.fixture.awayTeam.name;
  }

  updateVideoUrl(query: string) {
    const dangerousVideoUrl = 'https://www.youtube.com/embed?listType=search&list=' + query;
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(dangerousVideoUrl);
    this.showVideo = true;
  }
}
