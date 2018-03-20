import {Component, OnDestroy, OnInit} from '@angular/core';
import {FootApiService} from '../../shared/foot-api.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {Competition} from '../../shared/model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit, OnDestroy {
  competition: Competition;
  matchDay: number;
  fixtures: any[];
  subscribtions: Subscription[] = [];
  constructor(
    private apiService: FootApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.subscribtions.push(this.route.params.subscribe(param => {
      this.getCompetitions();
      this.getCompetition(param.leagueId);
    }));
  }

  getCompetition(competitionId): void {
    this.subscribtions.push(this.apiService.getCompetition(competitionId).subscribe(data => {
      this.competition = data;
      this.matchDay = data.currentMatchday;
      this.getData(competitionId, this.competition.currentMatchday);
    }));
  }

  getData(competitionId, matchday) {
    this.matchDay = matchday;
    this.subscribtions.push(this.apiService.getFixturesBeta(competitionId, matchday)
      .subscribe(data => {
        this.fixtures = data;
        console.log(this.fixtures);
      }));
  }

  getCompetitions() {
    this.subscribtions.push(this.apiService.getCompetitions().subscribe());
  }

  ngOnDestroy() {
    this.subscribtions.forEach(sub => sub.unsubscribe());
  }

}
