// app.routing.ts
import { Routes, RouterModule } from '@angular/router';
import {NewsComponent} from './news/news.component';
import {LeaguesComponent} from './leagues/leagues.component';

const APP_ROUTES: Routes = [
    {
        path: '',
        component: NewsComponent
    }, {
        path: 'result/:leagueId',
        component: LeaguesComponent
    },
    { path: '**', redirectTo: '' }
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
