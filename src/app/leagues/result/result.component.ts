import { Component, HostListener, OnInit } from '@angular/core';
import { FootApiService } from '../../shared/foot-api.service';
import { CompetitionResponse } from '../../shared/model';
import { CommonService } from '../../shared/common.service';
import { Devices } from '../../shared/enum';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  competition: CompetitionResponse;
  matchDay: number;
  fixtures$: Observable<any[]>;
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
    this.matchDay = !!matchday ? matchday : 1;
    this.fixtures$ = this.apiService.getMatches(competitionId, matchday, null);
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.device = this.commonService.detectDevice();
  }
}
