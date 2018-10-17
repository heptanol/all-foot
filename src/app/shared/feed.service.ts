import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {map, combineLatest, delay} from 'rxjs/operators';
import {FeedsType} from './enum';
import {environment} from '../../environments/environment';


@Injectable()
export class FeedService {

  apiUrl = environment.apiUrl;
  rssToJsonServiceBaseUrl = ' https://api.rss2json.com/v1/api.json?rss_url=';
  apiKey = '0wbgynfiznxfmgnooj8rvtdnwp0yz0in5prw0hjy';
  count = '100';
  lequipe = 'https://www.lequipe.fr/rss/actu_rss_Football.xml';
  sofoot = 'http://feeds.feedburner.com/SoFoot_news';

  constructor(
    private http: HttpClient
  ) { }


  getlequipeQuery(): string {
    return `&api_key=${this.apiKey}&count=${this.count}`;
  }
  getmaxifootQuery(): string {
    return `&api_key=${this.apiKey}&count=${this.count}`;
  }

  getOneFeedContent(type: FeedsType): Observable<any[]> {
    const params = new HttpParams().append('api_key', this.apiKey)
      .append('count', this.count);
    return this.http.get<any[]>(this.rssToJsonServiceBaseUrl + type, {params})
      .pipe(map(data => data['items']));
  }

  getNews(): Observable<any> {
    return this.http.get(`${this.apiUrl}/news`);
  }
}
