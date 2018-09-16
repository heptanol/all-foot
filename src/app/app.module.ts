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
import {ChampionsLeaguesComponent} from './champions-league/champions-leagues.component';
import {ResultClComponent} from './champions-league/result/result.component';
import {TableClComponent} from './champions-league/table/table.component';
import {FixtureComponent} from './shared/fixture/fixture.component';
import { TableTeamComponent } from './shared/table-team/table-team.component';
import {MatCardModule, MatMenuModule} from '@angular/material';
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
    LeaguesComponent,
    ChampionsLeaguesComponent,
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
    { provide: LOCALE_ID, useValue: lang }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
