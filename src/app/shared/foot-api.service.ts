import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {map, mergeMap, toArray} from 'rxjs/operators';
import {Competition, Ranking} from './model';


@Injectable()
export class FootApiService {

  apiUrl = 'http://127.0.0.1:8000/api';
  constructor(
    private http: HttpClient
  ) { }

  getFixtures(league, matchday): Observable<any> {
    return this.http.get(`${this.apiUrl}/competitions/${league}/fixtures/?matchday=${matchday}`)
      .pipe(map(data => data['fixtures']));
  }

  getFixturesBeta(league, matchday): Observable<any> {
    return this.http.get(`${this.apiUrl}/competitions/${league}/fixtures/?matchday=${matchday}`)
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
    return this.http.get<Competition>(`${this.apiUrl}/competitions/${league}`);
  }

  getCompetitionAlfa(league): Observable<Competition> {
    return this.http.get<Competition>(`http://api.football-data.org/v1/competitions/${league}`);
  }

  getCompetitionTable(league): Observable<Ranking> {
    return this.http.get(`${this.apiUrl}/competitions/${league}/leagueTable`)
      .pipe(map(data => data['standing']));
  }

  getCompetitions(): Observable<any> {
    headers = headers.set('X-Auth-Token', 'a7c8f168d2f14f02bd678f24fa05aff0')
      .set('X-Response-Control', 'minified');
    return this.http.get(`${this.apiUrl}/competitions`);
  }

  private getDay(date) {
    const dt = new Date(date);
    dt.setHours(0, 0, 0, 0);
    return dt.toISOString();
  }
}
