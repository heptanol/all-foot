import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-team-svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamSvgIconComponent {
  @Input() id: string;
  @Input() bigSize;

  get absUrl() {
    return window.location.href;
  }
}

