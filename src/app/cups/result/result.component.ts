import {Component, HostListener, Input, OnDestroy, OnInit} from '@angular/core';
import {FootApiService} from '../../shared/foot-api.service';
import {Subscription} from 'rxjs/Subscription';
import {CompetitionConfig, CompetitionResponse, MatchResponse} from '../../shared/model';
import {catchError, tap} from 'rxjs/operators';
import {CommonService} from '../../shared/common.service';
import {Devices, StageType} from '../../shared/enum';

@Component({
  selector: 'app-result-cl',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultClComponent implements OnInit, OnDestroy {
  @Input()competition: CompetitionResponse;
  @Input()config: CompetitionConfig;
  matchDay: number;
  groupStageFixtures: any[];
  finalStageFixtures: any[];
  subscribtions: Subscription[] = [];
  totalMatchDay: number;
  loading = false;
  error = false;
  device: Devices;
  deviceList = Devices;
  actualStage: {stage: StageType, index: number};
  avilableStage: any[];
  constructor(
    private apiService: FootApiService,
    private commonService: CommonService
  ) {}

  ngOnInit() {
    this.competition = this.commonService.getCompetition();
    this.config = this.commonService.getCompetitionConfig();
    this.avilableStage = this.config.availableStage;
    this.setActualStage();
    this.device = this.commonService.detectDevice();
    this.getGroupStageData(this.competition.competition.id, this.competition.season.currentMatchday);
    this.getFinalStageData(this.competition.competition.id, this.actualStage.stage);
  }

  getGroupStageData(competitionId, matchday) {
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
        this.groupStageFixtures = data.matches;
        this.totalMatchDay = data.totalMatchDays;
      }));
  }

  getFinalStageData(competitionId, stage) {
    this.loading = true;
    this.subscribtions.push(this.apiService.getMatches(competitionId, null, stage)
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
        this.finalStageFixtures = data.matches;
      }));
  }

  nextStage(): void {
    this.actualStage = {stage: this.avilableStage[this.actualStage.index + 1], index: this.actualStage.index + 1};
    this.getFinalStageData(this.competition.competition.id, this.actualStage.stage);
  }

  previousStage(): void {
    this.actualStage = {stage: this.avilableStage[this.actualStage.index - 1], index: this.actualStage.index - 1};
    this.getFinalStageData(this.competition.competition.id, this.actualStage.stage);
  }

  setActualStage(): void {
    this.actualStage = {stage: this.avilableStage[0], index: 0};
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.device = this.commonService.detectDevice();
  }

  ngOnDestroy() {
    this.subscribtions.forEach(sub => sub.unsubscribe());
  }


}
