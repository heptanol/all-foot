import {Component, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {FootApiService} from '../shared/foot-api.service';
import {CommonService} from '../shared/common.service';
import {Subscription} from 'rxjs/Subscription';
import {catchError, tap} from 'rxjs/operators';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html'
})
export class TestComponent {
}
