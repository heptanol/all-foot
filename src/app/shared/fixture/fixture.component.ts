import {Component, HostListener, Input} from '@angular/core';
import {Competition, Fixture, StatusType} from '../model';
import {Durations} from '../enum';
import {Router} from '@angular/router';

@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.scss']
})
export class FixtureComponent {

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
