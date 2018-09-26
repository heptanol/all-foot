import {Component, HostListener, Input} from '@angular/core';
import {Fixture, StatusType} from '../../model';
import {Durations} from '../../enum';
import {Router} from '@angular/router';

@Component({
  selector: 'app-fixture-min',
  templateUrl: './fixture-min.component.html',
  styleUrls: ['./fixture-min.component.scss']
})
export class FixtureMinComponent {

  @Input() fixture: Fixture;
  @Input() competition: any;
  statusType = StatusType;
  durationsTypes = Durations;
  constructor(
    private router: Router
  ) { }

  @HostListener('click')
  onClick() {
    this.router.navigate(['league/' + this.competition.id + '/matche/' + this.fixture.id]);
  }

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
