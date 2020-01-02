import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment';
import { map } from 'rxjs/operators';
import { CompetitionResponse } from './model';


@Injectable()
export class FootApiService {

  apiUrl = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) { }

  getMatches(league, matchday, stage): Observable<any> {
    let params = new HttpParams();
    params = matchday ? params.set('matchday', matchday) : params;
    params = stage ? params.set('stage', stage) : params;

    return this.http.get(`${this.apiUrl}/competitions/${league}/matches`, {params});
  }

  getMatche(league, matche): Observable<any> {
    return this.http.get(`${this.apiUrl}/competitions/${league}/matches/${matche}`);
  }

  getCompetitionStandings(league): Observable<CompetitionResponse> {
    return this.http.get<CompetitionResponse>(`${this.apiUrl}/competitions/${league}/standings`);
  }

  getCompetitionScorers(league): Observable<any> {
    return this.http.get(`${this.apiUrl}/competitions/${league}/scorers`);
  }

  getTodayMatches(): Observable<any> {
    return this.http.get(`${this.apiUrl}/matches/today`);
  }

  getLastImportantMatches(): Observable<any> {
    return this.http.get(`${this.apiUrl}/test`);
  }
}
