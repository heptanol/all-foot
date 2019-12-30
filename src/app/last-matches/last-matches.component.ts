import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { Match } from '../shared/model';
import { FootApiService } from '../shared/foot-api.service';

@Component({
  selector: 'app-last-matches',
  templateUrl: './last-matches.component.html',
  styleUrls: ['./last-matches.component.scss']
})
export class LastMatchesComponent implements OnInit {
  matches$: Observable<Match[]>;

  constructor(
    private apiService: FootApiService,
    private router: Router,
    ) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.matches$ = this.apiService.getLastImportantMatches();
  }

  getVideoQuery(match: Match): string {
    return match.homeTeam.name + ' ' +
      match.score.fullTime.homeTeam + '-' + match.score.fullTime.awayTeam + ' ' +
      match.awayTeam.name;
  }

  goToFixture(match: Match): void {
    this.router.navigate(['match/' + match.competition.id + '/' + match.id]);
  }

}
