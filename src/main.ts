import 'zone.js/dist/zone';

// To override clarity's class and elements styles
import './clarity-design-wrapper.less';

import { AppModule } from './app/app.module';

import { platformBrowser } from '@angular/platform-browser';

platformBrowser().bootstrapModule(AppModule);
