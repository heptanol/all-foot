import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { FootApiService } from '../shared/foot-api.service';
import { Cups } from '../shared/enum';
import { CommonService } from '../shared/common.service';
import { CompetitionResponse } from '../shared/model';

@Injectable()
export class CupsResolver implements Resolve<CompetitionResponse> {
  cups = Cups;
  constructor(
    private apiService: FootApiService,
    private commonService: CommonService
  ) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CompetitionResponse> {
    const cometitionConfig = Object.values(this.cups).find((val) => val.path === route.params['cupPath']);
    this.commonService.setCompetitionConfig(cometitionConfig);
    return this.apiService.getCompetitionStandings(cometitionConfig.id);
  }
}

