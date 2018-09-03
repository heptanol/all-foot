import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import localeFr from '@angular/common/locales/fr';
import { MatListModule } from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AppComponent } from './app.component';
import { FeedService } from './shared/feed.service';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NewsComponent } from './news/news.component';
import {Routing} from './app.routing';
import { ResultComponent } from './leagues/result/result.component';
import {FootApiService} from './shared/foot-api.service';
import { TableComponent } from './leagues/table/table.component';
import {GroupByPipe} from './shared/group-by';
import { LeaguesComponent } from './leagues/leagues.component';
import {CommonService} from './shared/common.service';
import {ChampionsLeaguesComponent} from './champions-league/champions-leagues.component';
import {ResultClComponent} from './champions-league/result/result.component';
import {TableClComponent} from './champions-league/table/table.component';
import {FixtureComponent} from './shared/fixture/fixture.component';
import { TableTeamComponent } from './shared/table-team/table-team.component';
import {MatMenuModule} from '@angular/material';
import {IconComponent} from './shared/nav-menu/icon.component';
import {TodayComponent} from './today/today.component';
import { registerLocaleData } from '@angular/common';
import {TeamLogoComponent} from './shared/team-logo/team-logo.component';
registerLocaleData(localeFr);


@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    ResultComponent,
    TableComponent,
    GroupByPipe,
    LeaguesComponent,
    ChampionsLeaguesComponent,
    ResultClComponent,
    TableClComponent,
    FixtureComponent,
    IconComponent,
    TodayComponent,
    TableTeamComponent,
    TeamLogoComponent
  ],
  imports: [
    BrowserModule,
    MatListModule,
    MatDividerModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatGridListModule,
    MatMenuModule,
    MatTabsModule,
    MatTableModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    Routing,
    HttpClientModule
  ],
  providers: [
    FeedService,
    FootApiService,
    CommonService,
    { provide: LOCALE_ID, useValue: 'fr' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
