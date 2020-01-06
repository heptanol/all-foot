import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Match } from '../../model';
import { DurationType, StatusType } from '../../enum';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatusComponent {
  @Input() fixture: Match;
  @Input() min = false;
  statusType = StatusType;
  durationsTypes = DurationType;
}
