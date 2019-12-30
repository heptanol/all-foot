import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Match } from '../../model';
import { FootApiService } from '../../foot-api.service';
import { CommonService } from '../../common.service';
import { StageType, StatusType } from '../../enum';
import { HeaderService } from '../../header/header.service';

@Component({
  selector: 'app-fixture-details',
  templateUrl: './fixture-details.component.html',
  styleUrls: ['./fixture-details.component.scss']
})
export class FixtureDetailsComponent implements OnInit {

  fixture: Match;
  leagueId: string;
  StageType = StageType;
  StatusType = StatusType;

  constructor(
    private apiService: FootApiService,
    private route: ActivatedRoute,
    private router: Router,
    private commonService: CommonService,
    private headerService: HeaderService
  ) {}

  ngOnInit() {
    this.getMatch();
    this.headerService.setSubTitle(this.generateTitle());
  }

  getMatch(): void {
    this.route.data.subscribe(data => {
      this.fixture = data.fixture;
      this.leagueId = data.leagueId;
    });
  }

  generateTitle(): string {
    return this.fixture.homeTeam.name + ' - ' + this.fixture.awayTeam.name;
  }

  generateMatchSearchWord(): string {
    return this.fixture.homeTeam.name + ' ' +
      this.fixture.score.fullTime.homeTeam + '-' + this.fixture.score.fullTime.awayTeam + ' ' +
      this.fixture.awayTeam.name;
  }
}
