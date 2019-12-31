import { Component, OnInit } from '@angular/core';
import { CompetitionResponse, ScorerTable } from '../../shared/model';
import { FootApiService } from '../../shared/foot-api.service';
import { CommonService } from '../../shared/common.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-scorers',
  templateUrl: './scorers.component.html',
  styleUrls: ['./scorers.component.scss']
})
export class ScorersComponent implements OnInit {
  competition: CompetitionResponse;
  scorers: ScorerTable[];
  scorers$: Observable<ScorerTable[]>;

  constructor(
    private apiService: FootApiService,
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.competition = this.commonService.getCompetition();
    this.getData();
  }

  getData() {
    this.scorers$ = this.apiService.getCompetitionScorers(this.competition.competition.id);
  }

}
