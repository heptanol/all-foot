import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {Breakpoint, Devices} from './enum';

@Injectable()
export class CommonService {

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
}
