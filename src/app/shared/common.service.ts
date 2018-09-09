import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {TranslateService} from '@ngx-translate/core';

@Injectable()
export class CommonService {

  constructor(
    public snackBar: MatSnackBar,
    private translate: TranslateService,
  ) {}

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }

  setLangue() {
    this.translate.use(navigator.language.slice(0, 2));
  }
}
