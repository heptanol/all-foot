import { Component, OnInit } from '@angular/core';
import {Leagues} from '../shared/enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  leagues = [];

  constructor() { }

  ngOnInit() {
    this.getLeagues();
  }

  getLeagues(): void {
    const leaguesList = Leagues;
    Object.values(leaguesList).map((val) => {
      return this.leagues.push(val);
    });
  }

}
