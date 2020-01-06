import { ChangeDetectionStrategy, Component, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Match } from '../model';
import { DurationType } from '../enum';

@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FixtureComponent {

  @Input() fixture: Match;
  @Input() competition: any;
  durationsTypes = DurationType;
  constructor(
    private router: Router
  ) { }

  @HostListener('click')
  onClick() {
    this.router.navigate(['match/' + this.competition.id + '/' + this.fixture.id]);
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
