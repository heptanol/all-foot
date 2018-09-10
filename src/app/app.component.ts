import {Component, OnInit} from '@angular/core';
import {CustomTranslateService} from './shared/translate/translate.service';
import {HeaderService} from './shared/header/header.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private translate: CustomTranslateService,
    private header: HeaderService,
  ) {
    translate.setLangue();
    header.setTitle();
    header.setMeta();
  }

  ngOnInit() {
  }
}
