import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { FootApiService } from '../shared/foot-api.service';
import { Leagues } from '../shared/enum';
import { CompetitionResponse } from '../shared/model';

@Injectable()
export class LeaguesResolver implements Resolve<CompetitionResponse> {
  leagues = Leagues;
  constructor(private apiService: FootApiService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CompetitionResponse> {
    const comp = Object.values(this.leagues).find((val) => val.path === route.params['leaguePath']);
    return this.apiService.getCompetitionStandings(comp.id);
  }
}

