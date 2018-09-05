import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-team-logo',
  templateUrl: './team-logo.component.html',
  styleUrls: ['./team-logo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamLogoComponent {

  @Input() id: string;
  constructor() {}

}

