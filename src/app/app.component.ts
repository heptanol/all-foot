import {Component, HostListener, OnInit} from '@angular/core';
import {CustomTranslateService} from './shared/translate/translate.service';
import {HeaderService} from './shared/header/header.service';
import {Devices} from './shared/enum';
import {CommonService} from './shared/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  device: Devices;
  deviceList = Devices;
  constructor(
    private translate: CustomTranslateService,
    private commonService: CommonService,
    private header: HeaderService,
  ) {
    translate.setLangue();
    header.setTitle();
    header.setMeta();
  }

  ngOnInit() {
    this.device = this.commonService.detectDevice();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.device = this.commonService.detectDevice();
  }

  getSideNavMode(): string {
    if (this.device === Devices.DESKTOP) {
      return 'side';
    }
    return 'push';
  }
}
