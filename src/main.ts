import 'zone.js/dist/zone';

// import and override some of clarity's very generic class and elements styles
import './clr-design.less';

import { AppModule } from './app/app.module';

import { platformBrowser } from '@angular/platform-browser';

platformBrowser().bootstrapModule(AppModule);
