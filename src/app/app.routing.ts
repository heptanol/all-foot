// app.routing.ts
import { Routes, RouterModule } from '@angular/router';
import {NewsComponent} from './news/news.component';
import {ResultComponent} from './leagues/result/result.component';

const APP_ROUTES: Routes = [
    {
        path: '',
        component: NewsComponent
    }, {
        path: 'result/:league',
        component: ResultComponent
    },
    { path: '**', redirectTo: '' }
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
