import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {environment} from '../../environments/environment';
import {CustomTranslateService} from './translate/translate.service';


@Injectable()
export class FeedService {

  apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private customTranslateService: CustomTranslateService
  ) { }

  getNews(): Observable<any> {
    const params = new HttpParams().append('lang', this.customTranslateService.getLangue());
    return this.http.get(`${this.apiUrl}/news`, {params});
  }
}
