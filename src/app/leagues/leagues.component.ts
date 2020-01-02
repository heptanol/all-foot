import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { CompetitionResponse } from '../shared/model';
import { Leagues } from '../shared/enum';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.scss']
})
export class LeaguesComponent implements OnInit {

  competition: CompetitionResponse;
  leagues = Leagues;
  constructor(
    private route: ActivatedRoute,
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.getLeague();
  }

  getLeague() {
    this.route.data.pipe(take(1)).subscribe(data => {
      this.competition = data.competition;
      this.commonService.setCompetition(data.competition);
    });
  }
}
