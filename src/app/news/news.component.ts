import {Component, Input, OnInit} from '@angular/core';
import {FeedService} from '../shared/feed.service';
import {Observable} from 'rxjs/Observable';
import {catchError, take, tap} from 'rxjs/operators';
import {TranslateService} from '@ngx-translate/core';
import {HeaderService} from '../shared/header/header.service';
import {News} from '../shared/model';
import {CommonService} from '../shared/common.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  news: News[];
  @Input() isBloc = false;
  @Input() limit = 100;
  @Input() column = 3;
  loading = false;
  error = false;

  constructor(
    private feedService: FeedService,
    private headerService: HeaderService,
    private translateService: TranslateService,
    private commonService: CommonService
  ) {}

  ngOnInit(): void {
    if (!this.isBloc) {
      this.translateService.get('menu.news').pipe(take(1))
        .subscribe(value => this.headerService.setSubTitle(value));
    }
    this.getFeeds();
  }

  getFeeds() {
    this.loading = true;
    this.feedService.getNews()
      .pipe(
        tap(() => this.loading = false),
        catchError(err => {
          this.loading = false;
          this.error = true;
          this.commonService
            .openSnackBar('Un problème est survenue lors du chargement', 'fermer');
          return err;
        })
      ).subscribe(data => {
        this.news = data;
      });
  }

}

