import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class CustomTranslateService {

  constructor(
    private translate: TranslateService
  ) {}

  setLangue() {
    this.translate.use(navigator.language.slice(0, 2));
  }

}
