import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
import { registerLocaleData } from "@angular/common";
import localEs from "@angular/common/locales/es";

registerLocaleData(localEs, 'es');

platformBrowserDynamic().bootstrapModule(AppModule);


/*import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { registerLocaleData } from '@angular/common';
import localEs from "@angular/common/locales/es";
import { LOCALE_ID } from '@angular/core';

registerLocaleData(localEs, 'es');

bootstrapApplication(AppComponent, {
    providers: [
        { provide: LOCALE_ID, useValue: 'es'},
    ],
}).catch((err) => console.error(err));
*/