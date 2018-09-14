// app.routing.ts
import { Routes, RouterModule } from '@angular/router';
import {NewsComponent} from './news/news.component';
import {LeaguesComponent} from './leagues/leagues.component';
import {ChampionsLeaguesComponent} from './champions-league/champions-leagues.component';
import {TodayComponent} from './today/today.component';

const APP_ROUTES: Routes = [
  {path: 'today', component: TodayComponent},
  {path: 'news', component: NewsComponent},
  {path: 'league/:leaguePath', component: LeaguesComponent},
  {path: 'chamions-league', component: ChampionsLeaguesComponent},
  { path: '**', redirectTo: '' }
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
