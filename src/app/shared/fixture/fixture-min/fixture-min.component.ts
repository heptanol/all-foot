import {Component, Input} from '@angular/core';
import {Fixture, StatusType} from '../../model';
import {Durations} from '../../enum';

@Component({
  selector: 'app-fixture-min',
  templateUrl: './fixture-min.component.html',
  styleUrls: ['./fixture-min.component.scss']
})
export class FixtureMinComponent {

  @Input() fixture: Fixture;
  statusType = StatusType;
  durationsTypes = Durations;
  constructor() { }


  isHomeWinner() {
    if (this.fixture.score.fullTime.homeTeam > this.fixture.score.fullTime.awayTeam) {
      return true;
    } else if (this.fixture.score.extraTime.homeTeam > this.fixture.score.extraTime.awayTeam) {
      return true;
    } else if (this.fixture.score.penalties.homeTeam > this.fixture.score.penalties.awayTeam) {
      return true;
    }
  }

  isAwayWinner() {
    if (this.fixture.score.fullTime.homeTeam < this.fixture.score.fullTime.awayTeam) {
      return true;
    } else if (this.fixture.score.extraTime.homeTeam < this.fixture.score.extraTime.awayTeam) {
      return true;
    } else if (this.fixture.score.penalties.homeTeam < this.fixture.score.penalties.awayTeam) {
      return true;
    }
  }

}
