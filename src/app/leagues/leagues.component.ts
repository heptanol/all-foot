import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FootApiService} from '../shared/foot-api.service';
import {Competition} from '../shared/model';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.scss']
})
export class LeaguesComponent implements OnInit, OnDestroy {

  competition: Competition;
  matchDay: number;
  subscribtions: Subscription[] = [];
  constructor(
    private apiService: FootApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.subscribtions.push(this.route.params.subscribe(param => {
      this.getCompetition(param.leagueId);
    }));
  }

  getCompetition(competitionId): void {
    this.subscribtions.push(this.apiService.getCompetition(competitionId).subscribe(data => {
      this.competition = data;
      this.matchDay = data.currentMatchday;
    }));
  }

  getAllCompetitions() {
    this.subscribtions.push(this.apiService.getCompetitions().subscribe());
  }

  ngOnDestroy() {
    this.subscribtions.forEach(sub => sub.unsubscribe());
  }
}
