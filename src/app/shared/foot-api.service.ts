import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Competition, Ranking} from './model';


@Injectable()
export class FootApiService {

  apiUrl = 'http://127.0.0.1:8000/api';
  constructor(
    private http: HttpClient
  ) { }

  getMatches(league, matchday): Observable<any> {
    return this.http.get(`${this.apiUrl}/competitions/${league}/matches?matchday=${matchday}`);
  }

  getCompetition(league): Observable<Competition> {
    return this.http.get<Competition>(`${this.apiUrl}/competitions/${league}`);
  }

  getCompetitionTable(league, matchday): Observable<any> {
    return this.http.get(`${this.apiUrl}/competitions/${league}/leagueTable?matchday=${matchday}`);
  }

  getCompetitions(): Observable<any> {
    return this.http.get(`${this.apiUrl}/competitions`);
  }
}
