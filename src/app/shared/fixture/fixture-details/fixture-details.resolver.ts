import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FootApiService } from '../../foot-api.service';
import { Injectable } from '@angular/core';

@Injectable()
export class FixtureDetailsResolver implements Resolve<boolean> {
  constructor(private apiService: FootApiService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.apiService.getMatche(route.params['leaguePath'], route.params['matchId']);
  }
}

@Injectable()
export class FixtureDetailsLeagueResolver implements Resolve<boolean> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return route.params['leaguePath'];
  }
}
