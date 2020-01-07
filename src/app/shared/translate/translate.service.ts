import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {LangEnnum} from '../enum';

@Injectable()
export class CustomTranslateService {

  lang: LangEnnum;

  constructor(
    private translate: TranslateService
  ) {}

  initLangue() {
    const lang = localStorage.getItem('lang') ? localStorage.getItem('lang') : navigator.language.slice(0, 2);
    this.translate.use(lang);
    this.lang = <LangEnnum>lang;
    localStorage.setItem('lang', lang);
  }

  setLangue(lang: LangEnnum) {
    this.translate.use(lang);
    this.lang = <LangEnnum>lang;
    localStorage.setItem('lang', lang);
    location.reload();
  }

  getLangue() {
    return this.lang;
  }

}
