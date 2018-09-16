import {Component, Input, OnInit} from '@angular/core';
import {FeedService} from '../shared/feed.service';
import {Observable} from 'rxjs/Observable';
import {FeedsType} from '../shared/enum';
import {combineLatest} from 'rxjs/operators';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  feeds$: Observable<any>;
  @Input() isBloc = false;

  constructor(
    private feedService: FeedService
  ) {}

  ngOnInit(): void {
    this.getFeeds();
  }

  getFeeds() {
    this.feeds$ = this.feedService.getOneFeedContent(FeedsType.LEQUIPE).pipe(
      combineLatest(this.feedService.getOneFeedContent(FeedsType.SOFOOT_NEWS), (c, c3) => c.concat(c3))
    );
  }

}

