import {Component, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';
import {CommonService} from './shared/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title,
    private translate: TranslateService,
    private commonService: CommonService
  ) {
    commonService.setLangue();
    title.setTitle('Footpaper');

    meta.addTags([
      { name: 'author',   content: 'Footpaper.com'},
      { name: 'keywords', content: 'Footpaper, Football, foot'},
      { name: 'description', content: '' }
    ]);
  }

  ngOnInit() {
    this.translate.get('HOME.HELLO', ).subscribe((res: string) => {
      console.log(res);
    });
  }
}
