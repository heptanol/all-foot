import {Component, Input, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {FootApiService} from '../../shared/foot-api.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {Competition} from '../../shared/model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit, OnDestroy, OnChanges {
  @Input()competition: Competition;
  matchDay: number;
  fixtures: any[];
  subscribtion: Subscription;
  constructor(
    private apiService: FootApiService,
  ) {}

  ngOnInit() {
    this.getData(this.competition.id, this.competition.currentMatchday);
  }

  ngOnChanges() {
    this.getData(this.competition.id, this.competition.currentMatchday);
  }

  getData(competitionId, matchday) {
    this.matchDay = matchday;
    this.subscribtion = this.apiService.getFixturesBeta(competitionId, matchday)
      .subscribe(data => {
        this.fixtures = data;
      });
  }

  ngOnDestroy() {
    this.subscribtion.unsubscribe();
  }


}
