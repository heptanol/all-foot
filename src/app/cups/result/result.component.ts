import { Component, HostListener, OnInit } from '@angular/core';
import { FootApiService } from '../../shared/foot-api.service';
import { CompetitionConfig, CompetitionResponse, MatchResponse } from '../../shared/model';
import { CommonService } from '../../shared/common.service';
import { Devices, StageType } from '../../shared/enum';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-result-cl',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultClComponent implements OnInit {
  competition: CompetitionResponse;
  config: CompetitionConfig;
  matchDay: number;
  groupStageFixtures$: Observable<MatchResponse>;
  finalStageFixtures$: Observable<MatchResponse>;
  device: Devices;
  deviceList = Devices;
  actualStage: {stage: StageType, index: number};
  avilableStage: StageType[];

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
    this.matchDay = !!matchday ? matchday : 1;
    this.groupStageFixtures$ = this.apiService.getMatches(competitionId, matchday, null);
  }

  getFinalStageData(competitionId, stage) {
    this.finalStageFixtures$ = this.apiService.getMatches(competitionId, null, stage);
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

}
