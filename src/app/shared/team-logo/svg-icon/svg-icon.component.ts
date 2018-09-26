import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-team-svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.scss']
})
export class TeamSvgIconComponent {
  @Input() id: String;
  @Input() bigSize;

  constructor() {}

  get absUrl() {
    return window.location.href;
  }
}

