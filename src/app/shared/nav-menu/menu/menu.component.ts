import {Component, OnInit} from '@angular/core';
import {Leagues} from '../../enum';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  leagueList = [];
  leagues = Leagues;
  constructor() { }

  ngOnInit() {
    this.getLeagues();
  }

  getLeagues(): void {
    Object.values(this.leagues).map((val) => {
      return this.leagueList.push(val);
    });
  }
}
