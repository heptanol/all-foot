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
import {NotFoundComponent} from './shared/not-found/not-found.component';
import {LastMatchesComponent} from './last-matches/last-matches.component';
import { FixtureDetailsLeagueResolver, FixtureDetailsResolver } from './shared/fixture/fixture-details/fixture-details.resolver';
import { LeaguesResolver } from './leagues/leagues.resolver';
import { CupsResolver } from './cups/cups.resolver';

const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'last-matches',
    component: LastMatchesComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'league/:leaguePath',
    component: LeaguesComponent,
    resolve: {
      competition: LeaguesResolver
    },
    children: [
      {path: 'result', component: ResultComponent},
      {path: 'standing', component: TableComponent},
      {path: 'scorers', component: ScorersComponent},
    ]
  },
  {
    path: 'match/:leaguePath/:matchId',
    component: FixtureDetailsComponent,
    resolve: {
      fixture: FixtureDetailsResolver,
      leagueId: FixtureDetailsLeagueResolver
    }
  },
  {
    path: 'cup/:cupPath',
    component: CupsComponent,
    resolve: {
      competition: CupsResolver
    },
    children: [
      {path: 'result', component: ResultClComponent},
      {path: 'standing', component: TableClComponent},
    ]
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/not-found'
  }
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
