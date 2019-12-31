import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { FootApiService } from '../shared/foot-api.service';
import { Leagues } from '../shared/enum';

@Injectable()
export class LeaguesResolver implements Resolve<boolean> {
  leagues = Leagues;
  constructor(private apiService: FootApiService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const comp = Object.values(this.leagues).find((val) => val.path === route.params['leaguePath']);
    return this.apiService.getCompetitionStandings(comp.id);
  }
}

