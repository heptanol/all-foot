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
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NewsComponent } from './news/news.component';
import {Routing} from './app.routing';
import { ResultComponent } from './leagues/result/result.component';
import {FootApiService} from './shared/foot-api.service';
import { TableComponent } from './leagues/table/table.component';
import {GroupByPipe} from './shared/pipe/group-by';
import { LeaguesComponent } from './leagues/leagues.component';
import {CommonService} from './shared/common.service';
import {CupsComponent} from './cups/cups.component';
import {ResultClComponent} from './cups/result/result.component';
import {TableClComponent} from './cups/table/table.component';
import {FixtureComponent} from './shared/fixture/fixture.component';
import { TableTeamComponent } from './shared/table-team/table-team.component';
import {MatButtonToggleModule, MatCardModule, MatMenuModule} from '@angular/material';
import {TodayComponent} from './today/today.component';
import { registerLocaleData } from '@angular/common';
import {TeamSvgDefinitionsComponent} from './shared/team-logo/svg-definitions/svg-definitions.component';
import {TeamSvgIconComponent} from './shared/team-logo/svg-icon/svg-icon.component';
import {IconComponent} from './shared/nav-menu/icon/icon.component';
import { MenuComponent } from './shared/nav-menu/menu/menu.component';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {CustomTranslateService} from './shared/translate/translate.service';
import {HeaderService} from './shared/header/header.service';
import { NewsItemComponent } from './news/news-item/news-item.component';
import {OrderByPipe} from './shared/pipe/order-by';
import { HomeComponent } from './home/home.component';
import { FixtureMinComponent } from './shared/fixture/fixture-min/fixture-min.component';
import { ScorersComponent } from './leagues/scorers/scorers.component';
import { FixtureDetailsComponent } from './shared/fixture/fixture-details/fixture-details.component';
import {LeaguesResolver} from './shared/league-resolver';
import { MinTableComponent } from './shared/min-table/min-table.component';
import {MinTableTeamComponent} from './shared/table-team/min-table-team/min-table-team.component';
import { EventIconComponent } from './shared/fixture/event-icon/event-icon.component';
import { FooterComponent } from './shared/footer/footer.component';
import {LazyLoadingDirective} from './shared/lazy-loading.directive';
import { LineupComponent } from './shared/fixture/lineup/lineup.component';
import {SortLineUpPipe} from './shared/fixture/lineup/sortLineup';
import {PlayerPositionPipe} from './shared/fixture/lineup/player-position';
import { DetailsComponent } from './shared/fixture/details/details.component';
import { StatusComponent } from './shared/fixture/status/status.component';

registerLocaleData(localeFr);

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
export const lang = navigator.language.slice(0, 2);


@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    ResultComponent,
    TableComponent,
    GroupByPipe,
    OrderByPipe,
    SortLineUpPipe,
    PlayerPositionPipe,
    LeaguesComponent,
    CupsComponent,
    ResultClComponent,
    TableClComponent,
    FixtureComponent,
    IconComponent,
    TodayComponent,
    TableTeamComponent,
    TeamSvgDefinitionsComponent,
    TeamSvgIconComponent,
    MenuComponent,
    NewsItemComponent,
    HomeComponent,
    FixtureMinComponent,
    ScorersComponent,
    FixtureDetailsComponent,
    MinTableComponent,
    MinTableTeamComponent,
    EventIconComponent,
    FooterComponent,
    LazyLoadingDirective,
    LineupComponent,
    DetailsComponent,
    StatusComponent,
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
    MatButtonToggleModule,
    MatTableModule,
    MatSnackBarModule,
    MatCardModule,
    BrowserAnimationsModule,
    Routing,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    FeedService,
    FootApiService,
    CommonService,
    HeaderService,
    CustomTranslateService,
    LeaguesResolver,
    { provide: LOCALE_ID,
      deps: [CustomTranslateService],
      useFactory: (customTranslateService) => customTranslateService.getLangue()
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
