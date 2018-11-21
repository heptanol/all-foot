import {Component, EventEmitter, HostListener, Input, OnChanges, OnDestroy, OnInit, Output} from '@angular/core';
import {FootApiService} from '../shared/foot-api.service';
import {CommonService} from '../shared/common.service';
import {Subscription} from 'rxjs/Subscription';
import {catchError, take, tap} from 'rxjs/operators';
import {Devices} from '../shared/enum';
import {TranslateService} from '@ngx-translate/core';
import {HeaderService} from '../shared/header/header.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnInit, OnDestroy, OnChanges {
  fixtures: any[];
  subscribtion: Subscription;
  loading = false;
  error = false;
  device: Devices;
  deviceList = Devices;
  @Input() isBloc = false;
  @Output() noMatches = new EventEmitter();
  constructor(
    private apiService: FootApiService,
    private commonService: CommonService,
    private headerService: HeaderService,
    private translateService: TranslateService
  ) {}

  ngOnInit() {
    if (!this.isBloc) {
      this.translateService.get('menu.today').pipe(take(1))
        .subscribe(value => this.headerService.setSubTitle(value));
    }
    this.device = this.commonService.detectDevice();
    this.getData();
  }

  ngOnChanges() {
    this.getData();
  }

  getData() {
    this.loading = true;
    this.subscribtion = this.apiService.getTodayMatches()
      .pipe(
        tap(() => this.loading = false),
        catchError(err => {
          this.loading = false;
          this.error = true;
          this.commonService
            .openSnackBar('Un problème est survenue lors du chargement', 'fermer');
          return err;
        })
      )
      .subscribe(data => {
        this.fixtures = data;
        if (this.fixtures.length === 0) {
          this.noMatches.emit(true);
        }
      });
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.device = this.commonService.detectDevice();
  }

  ngOnDestroy() {
    this.subscribtion.unsubscribe();
  }


}
