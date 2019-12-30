import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Cups, LangEnnum, Leagues} from '../../enum';
import {CustomTranslateService} from '../../translate/translate.service';

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
  lang: LangEnnum;
  LangEnnum = LangEnnum;
  @Output() navClose = new EventEmitter();
  constructor(
    private translate: CustomTranslateService
  ) { }

  ngOnInit() {
    this.getLeagues();
    this.getCups();
    this.lang = this.translate.getLangue();
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

  switchLang(val) {
    this.translate.setLangue(val);
  }

  closeSidenav() {
    this.navClose.emit();
  }

}
