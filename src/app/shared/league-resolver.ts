import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Injectable} from '@angular/core';
import {CompetitionConfig} from './model';
import {Leagues} from './enum';

@Injectable()
export class LeaguesResolver implements Resolve<any> {
  leagues = Leagues;

  constructor() {}

  resolve(route: ActivatedRouteSnapshot): CompetitionConfig {
    const leaguePath = route.paramMap.get('leaguePath');
    const config = Object.values(this.leagues).find((val) => val.path === leaguePath);
    return config;
  }

}
