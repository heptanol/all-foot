import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {Breakpoint, Devices} from './enum';
import {CompetitionConfig, CompetitionResponse} from './model';

@Injectable()
export class CommonService {

  private _competition: CompetitionResponse;
  private _competitionConfig: CompetitionConfig;
  constructor(
    public snackBar: MatSnackBar
  ) {}

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }

  detectDevice(): Devices {
    if (window.innerWidth > Breakpoint.DESKTOP) {
      return Devices.DESKTOP;
    } else if (window.innerWidth > Breakpoint.TABLET) {
      return Devices.TABLET;
    } else {
      return Devices.PHONE;
    }
  }

  setCompetition(competition: CompetitionResponse) {
    this._competition = competition;
  }
  getCompetition(): CompetitionResponse {
    return this._competition;
  }


  getCompetitionConfig(): CompetitionConfig {
    return this._competitionConfig;
  }

  setCompetitionConfig(value: CompetitionConfig) {
    this._competitionConfig = value;
  }
}
