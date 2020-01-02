import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CustomTranslateService } from './translate/translate.service';
import { Observable } from 'rxjs/Observable';


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
