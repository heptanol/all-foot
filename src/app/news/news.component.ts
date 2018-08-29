import { Component, OnInit } from '@angular/core';
import {FeedService} from '../shared/feed.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  feeds$: Observable<any>;

  constructor(
    private feedService: FeedService
  ) {}

  ngOnInit(): void {
    this.getFeeds();
  }

  getFeeds() {
    this.feeds$ = this.feedService.getFeedContent();
  }

}

