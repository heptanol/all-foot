// app.routing.ts
import { Routes, RouterModule } from '@angular/router';
import {NewsComponent} from './news/news.component';
import {LeaguesComponent} from './leagues/leagues.component';
import {TodayComponent} from './today/today.component';
import {HomeComponent} from './home/home.component';
import {FixtureDetailsComponent} from './shared/fixture/fixture-details/fixture-details.component';
import {CupsComponent} from './cups/cups.component';

const APP_ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'today', component: TodayComponent},
  {path: 'news', component: NewsComponent},
  {path: 'league/:leaguePath', component: LeaguesComponent},
  {path: 'league/:leaguePath/matche/:matchId', component: FixtureDetailsComponent},
  {path: 'cup/:cupPath', component: CupsComponent},
  { path: '**', redirectTo: '' }
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
