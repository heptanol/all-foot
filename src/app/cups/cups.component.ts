import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FootApiService } from '../shared/foot-api.service';
import { CompetitionResponse } from '../shared/model';
import { take } from 'rxjs/operators';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-cups',
  templateUrl: './cups.component.html',
  styleUrls: ['./cups.component.scss']
})
export class CupsComponent implements OnInit {

  competition: CompetitionResponse;
  constructor(
    private apiService: FootApiService,
    private route: ActivatedRoute,
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.getCup();
  }

  getCup() {
    this.route.data.pipe(take(1)).subscribe(data => {
      this.competition = data.competition;
      this.commonService.setCompetition(data.competition);
    });
  }
}
