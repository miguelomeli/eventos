import { Routes, RouterModule } from '@angular/router';

import { WebLayoutComponent } from './_layout/web/layout/layout.component';
import { WebLayoutSimpleComponent } from './_layout/web/layout-simple/layout-simple.component';
import { WebHomeComponent } from './web/home/home.component';
import { WebBooksComponent } from './web/books/books.component';
import { WebDeportesComponent } from './web/deportes/deportes.component';
import { WebCasinoenvivoComponent } from './web/casinoenvivo/casinoenvivo.component';
import { WebEnvivoComponent } from './web/envivo/envivo.component';
import { WebPromocionesComponent } from './web/promociones/promociones.component';
import { WebSlotsComponent } from './web/slots/slots.component';
import { WebRegistroComponent } from './web/registro/registro.component';
import { WebBancaComponent } from './web/banca/banca.component';
import { WebCaballosComponent } from './web/caballos/caballos.component';
import { WebApuestascaballosComponent } from './web/apuestascaballos/apuestascaballos.component';
import { WebApuestasenvivoComponent } from './web/apuestasenvivo/apuestasenvivo.component';
const appRoutes: Routes = [
  {
    path: '',
    component: WebLayoutSimpleComponent,
    children: [
      {
        path: '',
        component: WebHomeComponent,
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: WebHomeComponent,
        pathMatch: 'full'
      },
      {
        path: 'registro',
        component: WebRegistroComponent,
        pathMatch: 'full'
      },
    ]
  },

  {
    path: '',
    component: WebLayoutComponent,
    children: [
      {
        path: 'casinoenvivo',
        component: WebCasinoenvivoComponent,
        pathMatch: 'full'
      },
      {
        path: 'deportes',
        component: WebDeportesComponent,
        pathMatch: 'full'
      },
      {
        path: 'envivo',
        component: WebEnvivoComponent,
        pathMatch: 'full'
      },
      {
        path: 'slots',
        component: WebSlotsComponent,
        pathMatch: 'full'
      },
      {
        path: 'promociones',
        component: WebPromocionesComponent,
        pathMatch: 'full'
      },
      {
        path: 'books',
        component: WebBooksComponent,
        pathMatch: 'full'
      },
      {
        path: 'banca',
        component: WebBancaComponent,
        pathMatch: 'full'
      },
      {
        path: 'caballos',
        component: WebCaballosComponent,
        pathMatch: 'full'
      },
      {
        path: 'apuestascaballos',
        component: WebApuestascaballosComponent,
        pathMatch: 'full'
      },
      {
        path: 'apuestasenvivo',
        component: WebApuestasenvivoComponent,
        pathMatch: 'full'
      },
    ]
  },

  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);


