import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
    TableTeamComponent
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
    CommonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
