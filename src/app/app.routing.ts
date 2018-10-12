// app.routing.ts
import { Routes, RouterModule } from '@angular/router';
import {NewsComponent} from './news/news.component';
import {LeaguesComponent} from './leagues/leagues.component';
import {TodayComponent} from './today/today.component';
import {HomeComponent} from './home/home.component';
import {FixtureDetailsComponent} from './shared/fixture/fixture-details/fixture-details.component';
import {CupsComponent} from './cups/cups.component';
import {ResultComponent} from './leagues/result/result.component';
import {TableComponent} from './leagues/table/table.component';
import {ScorersComponent} from './leagues/scorers/scorers.component';
import {ResultClComponent} from './cups/result/result.component';
import {TableClComponent} from './cups/table/table.component';

const APP_ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'today', component: TodayComponent},
  {path: 'news', component: NewsComponent},
  {path: 'league/:leaguePath', component: LeaguesComponent, children: [
      {path: 'result', component: ResultComponent},
      {path: 'standing', component: TableComponent},
      {path: 'scorers', component: ScorersComponent},
    ]},
  {path: 'match/:leaguePath/:matchId', component: FixtureDetailsComponent},
  {path: 'cup/:cupPath', component: CupsComponent, children: [
      {path: 'result', component: ResultClComponent},
      {path: 'standing', component: TableClComponent},
    ]},
  { path: '**', redirectTo: '' }
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
