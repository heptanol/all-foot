import {Component, OnDestroy, OnInit} from '@angular/core';
import {FootApiService} from '../../shared/foot-api/foot-api.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit, OnDestroy {

  league: string;
  matchDay: string;
  ranking: any;
  fixtures: any[];
  subscribtions: Subscription[] = [];
  constructor(
    private apiService: FootApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.league = this.route.snapshot.paramMap.get('league');
    this.getCompetition();
  }

  getData() {
    this.subscribtions.push(this.apiService.getFixtures(this.league, this.matchDay).subscribe(data => {
      this.fixtures = data;
      console.log(this.fixtures);
    }));
  }

  getCompetition() {
    this.subscribtions.push(this.apiService.getCompetition(this.league).subscribe(data => {
      this.matchDay = data['matchday'];
      this.ranking = data['standing'];
      this.getData();
    }));
  }

  ngOnDestroy() {
    this.subscribtions.forEach((sub) => {
      sub.unsubscribe();
    });
  }

}
