import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {map, combineLatest, delay} from 'rxjs/operators';


@Injectable()
export class FeedService {

  rssToJsonServiceBaseUrl = ' https://api.rss2json.com/v1/api.json?rss_url=';
  apiKey = '0wbgynfiznxfmgnooj8rvtdnwp0yz0in5prw0hjy';
  count = 100;
  matchendirect = 'http://www.matchendirect.fr/rss/info.xml';
  lequipe = 'https://www.lequipe.fr/rss/actu_rss_Football.xml';
  maxifoot = 'http://rss.maxifoot.com/football-general.xml';

  constructor(
    private http: HttpClient
  ) { }

  getFeedContent(): any {
    const call1$: Observable<any> = this.http.get(this.rssToJsonServiceBaseUrl + this.matchendirect + this.getmatchendirectQuery())
      .pipe(map(data => data['items']));
    const call2$: Observable<any> = this.http.get(this.rssToJsonServiceBaseUrl + this.lequipe + this.getlequipeQuery())
      .pipe(map(data => data['items']));
    const call3$: Observable<any> = this.http.get(this.rssToJsonServiceBaseUrl + this.maxifoot + this.getmaxifootQuery())
      .pipe(map(data => data['items']));

    return call1$.pipe(
      combineLatest(call2$, (c1, c2) => c1.concat(c2)),
      combineLatest(call3$, (c, c3) => c.concat(c3)),
      ).pipe(map(data => data.sort((item1, item2) => item1['pubDate'] < item2['pubDate'] ? 1 : -1)), delay(1000));
  }

  getmatchendirectQuery(): string {
    return `&api_key=${this.apiKey}&count=${this.count}`;
  }
  getlequipeQuery(): string {
    return `&api_key=${this.apiKey}&count=${this.count}`;
  }
  getmaxifootQuery(): string {
    return `&api_key=${this.apiKey}&count=${this.count}`;
  }
}
