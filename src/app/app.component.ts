import {Component, OnInit} from '@angular/core';
import {Championat} from './shared/enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  leagueList = Championat;
  constructor() {}

  ngOnInit(): void {
  }

}
