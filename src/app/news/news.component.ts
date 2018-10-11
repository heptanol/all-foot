import {Component, Input, OnInit} from '@angular/core';
import {FeedService} from '../shared/feed.service';
import {Observable} from 'rxjs/Observable';
import {FeedsType} from '../shared/enum';
import {combineLatest, take} from 'rxjs/operators';
import {TranslateService} from '@ngx-translate/core';
import {HeaderService} from '../shared/header/header.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  feeds$: Observable<any>;
  @Input() isBloc = false;
  @Input() limit = 100;

  constructor(
    private feedService: FeedService,
    private headerService: HeaderService,
    private translateService: TranslateService,
  ) {}

  ngOnInit(): void {
    if (!this.isBloc) {
      this.translateService.get('menu.news').pipe(take(1))
        .subscribe(value => this.headerService.setSubTitle(value));
    }
    this.getFeeds();
  }

  getFeeds() {
    this.feeds$ = this.feedService.getOneFeedContent(FeedsType.LEQUIPE).pipe(
      combineLatest(this.feedService.getOneFeedContent(FeedsType.SOFOOT_NEWS), (c, c3) => c.concat(c3))
    );
  }

}

