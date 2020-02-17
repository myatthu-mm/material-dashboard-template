import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { ENV } from './environments/environment';
import 'hammerjs';

if (ENV.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
