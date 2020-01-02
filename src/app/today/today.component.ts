import { Component, EventEmitter, HostListener, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FootApiService } from '../shared/foot-api.service';
import { CommonService } from '../shared/common.service';
import { Devices } from '../shared/enum';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnInit, OnChanges {
  fixtures: any[];
  fixtures$: Observable<any[]>;
  device: Devices;
  @Input() isBloc = false;
  @Output() noMatches = new EventEmitter();
  constructor(
    private apiService: FootApiService,
    private commonService: CommonService
  ) {}

  ngOnInit() {
    this.device = this.commonService.detectDevice();
    this.getData();
  }

  ngOnChanges() {
    this.getData();
  }

  getData() {
    this.fixtures$ = this.apiService.getTodayMatches();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.device = this.commonService.detectDevice();
  }
}
