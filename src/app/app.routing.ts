// app.routing.ts
import { Routes, RouterModule } from '@angular/router';
import {NewsComponent} from './news/news.component';
import {LeaguesComponent} from './leagues/leagues.component';
import {ChampionsLeaguesComponent} from './champions-league/champions-leagues.component';

const APP_ROUTES: Routes = [
  {path: '', component: NewsComponent},
  {path: 'result/:leagueId', component: LeaguesComponent},
  {path: 'match/:leagueId', component: LeaguesComponent},
  {path: 'chamions-league/:leagueId', component: ChampionsLeaguesComponent},
  { path: '**', redirectTo: '' }
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
