import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Goal, Match } from '../../model';
import { MatchEventEnum } from '../../enum';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsComponent implements OnInit{

  @Input() fixture: Match;
  events: any[] = [];
  MatchEventEnum = MatchEventEnum;

  ngOnInit(): void {
    this.setEvents();
  }

  setEvents(): void {
    if (this.fixture.bookings) {
      this.fixture.bookings.forEach((book) => {
        book['mode'] = MatchEventEnum.BOOKING;
        this.events.push(book);
      });
    }
    if (this.fixture.goals) {
      this.fixture.goals.forEach((goal) => {
        goal['mode'] = MatchEventEnum.GOAL;
        this.events.push(goal);
      });
    }
    if (this.fixture.substitutions) {
      this.fixture.substitutions.forEach((substitution) => {
        substitution['mode'] = MatchEventEnum.SUBSTITUTION;
        this.events.push(substitution);
      });
    }
  }

  isEventHome(event: Goal): boolean {
    let is = false;
    if (event.team.id === this.fixture.homeTeam.id && event.type !== 'OWN') {
      is = true;
    }
    if (event.team.id === this.fixture.awayTeam.id && event.type === 'OWN') {
      is = true;
    }
    return is;
  }

  isEventAway(event: Goal): boolean {
    let is = false;
    if (event.team.id === this.fixture.awayTeam.id && event.type !== 'OWN') {
      is = true;
    }
    if (event.team.id === this.fixture.homeTeam.id && event.type === 'OWN') {
      is = true;
    }
    return is;
  }

}
