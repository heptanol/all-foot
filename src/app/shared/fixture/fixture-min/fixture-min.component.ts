import {Component, Input} from '@angular/core';
import {Fixture, StatusType} from '../../model';

@Component({
  selector: 'app-fixture-min',
  templateUrl: './fixture-min.component.html',
  styleUrls: ['./fixture-min.component.scss']
})
export class FixtureMinComponent {

  @Input() fixture: Fixture;
  statusType = StatusType;
  constructor() { }

}
