import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {delay, groupBy, map, mergeMap, toArray} from 'rxjs/operators';
import { from } from 'rxjs/observable/from';
import {Competition, Ranking} from './model';


@Injectable()
export class FootApiService {
  constructor(
    private http: HttpClient
  ) { }

  getFixtures(league, matchday): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('X-Auth-Token', 'a7c8f168d2f14f02bd678f24fa05aff0')
      .set('X-Response-Control', 'minified');
    return this.http.get(`http://api.football-data.org/v1/competitions/${league}/fixtures/?matchday=${matchday}`, {headers})
      .pipe(map(data => data['fixtures']));
  }

  getFixturesBeta(league, matchday): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('X-Auth-Token', 'a7c8f168d2f14f02bd678f24fa05aff0')
      .set('X-Response-Control', 'minified');
    return this.http.get(`http://api.football-data.org/v1/competitions/${league}/fixtures/?matchday=${matchday}`, {headers})
      .pipe(
        mergeMap(data => data['fixtures']),
        map(fixture => ({
          id: fixture['id'],
          awayTeamId: fixture['awayTeamId'],
          awayTeamName: fixture['awayTeamName'],
          homeTeamId: fixture['homeTeamId'],
          homeTeamName: fixture['homeTeamName'],
          matchday: fixture['matchday'],
          date: fixture['date'],
          status: fixture['status'],
          result: fixture['result'],
          day: this.getDay(fixture['date'])
        })),
        toArray()
      );
  }

  getCompetition(league): Observable<Competition> {
    let headers = new HttpHeaders();
    headers = headers.set('X-Auth-Token', 'a7c8f168d2f14f02bd678f24fa05aff0')
      .set('X-Response-Control', 'minified');
    return this.http.get<Competition>(`http://api.football-data.org/v1/competitions/${league}`, {headers});
  }

  getCompetitionTable(league): Observable<Ranking> {
    let headers = new HttpHeaders();
    headers = headers.set('X-Auth-Token', 'a7c8f168d2f14f02bd678f24fa05aff0')
      .set('X-Response-Control', 'minified');
    return this.http.get(`http://api.football-data.org/v1/competitions/${league}/leagueTable`, {headers})
      .pipe(map(data => data['standing']));
  }

  getCompetitions(): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('X-Auth-Token', 'a7c8f168d2f14f02bd678f24fa05aff0')
      .set('X-Response-Control', 'minified');
    return this.http.get(`http://api.football-data.org/v1/competitions`, {headers});
  }

  private getDay(date) {
    const dt = new Date(date);
    dt.setHours(0, 0, 0, 0);
    return dt.toISOString();
  }
}
