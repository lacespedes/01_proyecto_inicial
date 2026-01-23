import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { EncabezadoComponent } from './app/encabezado/encabezado.component';

bootstrapApplication(AppComponent).catch((err) => console.error(err));
