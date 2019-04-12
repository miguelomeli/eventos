import { Routes, RouterModule } from '@angular/router';

import { WebLayoutComponent } from './_layout/web/layout/layout.component';
import { WebHomeComponent } from './web/home/home.component';
const appRoutes: Routes = [
  {
    path: '',
    component: WebLayoutComponent,
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
    ]
  },
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);


