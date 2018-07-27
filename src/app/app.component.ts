import {Component, OnInit} from '@angular/core';
import {Leagues} from './shared/enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  leagueList = [];
  leagues = Leagues;
  constructor() {}

  ngOnInit(): void {
    this.getLeagues();
  }

  getLeagues(): void {
    Object.values(this.leagues).map((val) => {
      return this.leagueList.push({id: val.id, name: val.name});
    });
  }
}
