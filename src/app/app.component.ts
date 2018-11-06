import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {CustomTranslateService} from './shared/translate/translate.service';
import {HeaderService} from './shared/header/header.service';
import {Devices} from './shared/enum';
import {CommonService} from './shared/common.service';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {googleAnalytics} from './shared/analytics/script';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  device: Devices;
  deviceList = Devices;
  sub: Subscription;
  constructor(
    private translate: CustomTranslateService,
    private commonService: CommonService,
    private header: HeaderService,
    private router: Router,
  ) {
    translate.initLangue();
    header.setTitle();
    header.setMeta();
    this.router.events.pipe(filter(event => event instanceof NavigationStart))
      .subscribe(event => {
      const url = event['url'];
      if (url !== null && url !== undefined && url !== '' && url.indexOf('null') < 0) {
        googleAnalytics(url);
      }
    });
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

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
