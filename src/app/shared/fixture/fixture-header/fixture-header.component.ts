import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Match } from '../../model';
import { DurationType } from '../../enum';

@Component({
  selector: 'app-fixture-header',
  templateUrl: './fixture-header.component.html',
  styleUrls: ['./fixture-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FixtureHeaderComponent {

  @Input() fixture: Match;
  durationsTypes = DurationType;


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
