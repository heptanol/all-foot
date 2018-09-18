import {Component, HostListener, OnInit} from '@angular/core';
import {Devices, Leagues} from '../shared/enum';
import {CommonService} from '../shared/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  device: Devices;
  deviceList = Devices;
  leagues = [];

  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.device = this.commonService.detectDevice();
    this.getLeagues();
  }

  getLeagues(): void {
    const leaguesList = Leagues;
    Object.values(leaguesList).map((val) => {
      return this.leagues.push(val);
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.device = this.commonService.detectDevice();
  }

  getCompetitionCols() {
    if (this.device === this.deviceList.DESKTOP) {
      return 8;
    } else if (this.device === this.deviceList.TABLET) {
      return 4;
    } else {
      return 2;
    }
  }


}
