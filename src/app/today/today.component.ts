import { Component, EventEmitter, HostListener, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { FootApiService } from '../shared/foot-api.service';
import { CommonService } from '../shared/common.service';
import { Devices } from '../shared/enum';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnInit {
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

  getData() {
    this.apiService.getTodayMatches().subscribe(data => {
      this.fixtures = data;
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.device = this.commonService.detectDevice();
  }
}
