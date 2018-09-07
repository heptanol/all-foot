import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.scss']
})
export class SvgIconComponent {
  @Input() id: String;

  constructor() {}

  get absUrl() {
    return window.location.href;
  }
}

