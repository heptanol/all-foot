import {Component, Input, OnInit} from '@angular/core';
import {Booking, Goal, Match, Substitution} from '../../model';
import {DurationType, StatusType} from '../../enum';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {

  @Input() fixture: Match;
  @Input() min = false;
  minute = 0;
  statusType = StatusType;
  durationsTypes = DurationType;
  ngOnInit() {
    this.setMinute();
  }

  setMinute(): void {
    const max: number[] = [];
    max.push(<number>Math.max.apply(Math, this.fixture.bookings.map((book: Booking) => book.minute)));
    max.push(<number>Math.max.apply(Math, this.fixture.goals.map((goal: Goal) => goal.minute)));
    max.push(<number>Math.max.apply(Math, this.fixture.substitutions.map((substitution: Substitution) => substitution.minute)));
    this.minute = (Math.max.apply(Math, max) === Number.NEGATIVE_INFINITY) ? 0 : Math.max.apply(Math, max);
  }

}
