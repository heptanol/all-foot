import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {map, mergeMap, toArray, tap} from 'rxjs/operators';
import {Competition, Ranking} from './model';


@Injectable()
export class FootApiService {

  apiUrl = 'http://127.0.0.1:8000/api';
  constructor(
    private http: HttpClient
  ) { }

  getFixtures(league, matchday): Observable<any> {
    return this.http.get(`${this.apiUrl}/competitions/${league}/fixtures?matchday=${matchday}`);
  }

  getCompetition(league): Observable<Competition> {
    return this.http.get<Competition>(`${this.apiUrl}/competitions/${league}`);
  }

  getCompetitionTable(league): Observable<Ranking> {
    return this.http.get(`${this.apiUrl}/competitions/${league}/leagueTable`);
  }

  getCompetitions(): Observable<any> {
    return this.http.get(`${this.apiUrl}/competitions`);
  }
}
