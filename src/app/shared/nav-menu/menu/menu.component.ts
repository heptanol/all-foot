import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Cups, Leagues} from '../../enum';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  leagueList = [];
  cupList = [];
  leagues = Leagues;
  cups = Cups;
  @Output() navClose = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.getLeagues();
    this.getCups();
  }

  getLeagues(): void {
    Object.values(this.leagues).map((val) => {
      return this.leagueList.push(val);
    });
  }

  getCups(): void {
    Object.values(this.cups).map((val) => {
      return this.cupList.push(val);
    });
  }

  closeSidenav() {
    this.navClose.emit();
  }

}
