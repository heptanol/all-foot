import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'zone.js';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { googleAnalyticsHeadScripts } from './app/shared/analytics/script';

if (environment.production) {
  enableProdMode();
}
googleAnalyticsHeadScripts();

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
