import {Component, HostListener, Input, OnDestroy, OnInit} from '@angular/core';
import {FootApiService} from '../../shared/foot-api.service';
import {Subscription} from 'rxjs/Subscription';
import {CompetitionResponse, MatchResponse} from '../../shared/model';
import {catchError, tap} from 'rxjs/operators';
import {CommonService} from '../../shared/common.service';
import {Devices} from '../../shared/enum';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit, OnDestroy {
  @Input()competition: CompetitionResponse;
  matchDay: number;
  totalMatchDay: number;
  fixtures: any[];
  subscribtions: Subscription[] = [];
  loading = false;
  error = false;
  device: Devices;
  deviceList = Devices;
  constructor(
    private apiService: FootApiService,
    private commonService: CommonService
  ) {}

  ngOnInit() {
    this.competition = this.commonService.getCompetition();
    this.device = this.commonService.detectDevice();
    this.getData(this.competition.competition.id, this.competition.season.currentMatchday);
  }

  getData(competitionId, matchday?: number) {
    matchday = !matchday ? 1 : matchday;
    this.matchDay = matchday;
    this.loading = true;
    this.subscribtions.push(this.apiService.getMatches(competitionId, matchday, null)
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
      .subscribe((data: MatchResponse) => {
        this.fixtures = data.matches;
        this.totalMatchDay = data.totalMatchDays;
      }));
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.device = this.commonService.detectDevice();
  }

  ngOnDestroy() {
    this.subscribtions.forEach(sub => sub.unsubscribe());
  }


}
