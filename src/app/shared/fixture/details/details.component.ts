import {Component, Input, OnInit} from '@angular/core';
import {Match} from '../../model';
import {forEach} from '@angular/router/src/utils/collection';
import {MatchEventEnum} from '../../enum';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit{

  @Input() fixture: Match;
  events: any[] = [];
  MatchEventEnum = MatchEventEnum;
  constructor() { }

  ngOnInit(): void {
    this.setEvents();
  }

  setEvents(): void {
    this.fixture.bookings.forEach((book) => {
      book['type'] = MatchEventEnum.BOOKING;
      this.events.push(book);
    });
    this.fixture.goals.forEach((goal) => {
      goal['type'] = MatchEventEnum.GOAL;
      this.events.push(goal);
    });
    this.fixture.substitutions.forEach((substitution) => {
      substitution['type'] = MatchEventEnum.SUBSTITUTION;
      this.events.push(substitution);
    });
  }

}
