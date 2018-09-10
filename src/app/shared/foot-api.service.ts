import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment';


@Injectable()
export class FootApiService {

  apiUrl = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) { }

  getMatches(league, matchday): Observable<any> {
    return this.http.get(`${this.apiUrl}/competitions/${league}/matches?matchday=${matchday}`);
  }

  getCompetition(league): Observable<any> {
    return this.http.get(`${this.apiUrl}/competitions/${league}`);
  }

  getCompetitionTable(league, matchday): Observable<any> {
    return this.http.get(`${this.apiUrl}/competitions/${league}/standings`);
  }

  getTodayMatches(): Observable<any> {
    return this.http.get(`${this.apiUrl}/matches/today`);
  }
}
