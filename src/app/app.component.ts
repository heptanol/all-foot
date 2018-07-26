import {Component, OnInit} from '@angular/core';
import {Leagues, LeaguesSS} from './shared/enum';

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
    console.log(this.leagues);
    Object.values(this.leagues).map((val) => {
      console.log(val);
      return this.leagueList.push({id: val.id, name: val.name});
    });
  }
}
