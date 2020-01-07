import { Component, Input, OnInit } from '@angular/core';
import { FeedService } from '../shared/feed.service';
import { News } from '../shared/model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  news: News[];
  news$: Observable<News[]>;
  @Input() isBloc = false;
  @Input() limit = 100;
  @Input() column = 3;

  constructor(
    private feedService: FeedService
  ) {}

  ngOnInit(): void {
    this.getFeeds();
  }

  getFeeds() {
    this.news$ = this.feedService.getNews();
  }
}

