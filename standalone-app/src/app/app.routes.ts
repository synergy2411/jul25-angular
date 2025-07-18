import { Routes } from '@angular/router';
import { OutputComponent } from './components/output/output.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'output',
    pathMatch: 'full',
  },
  {
    path: 'output',
    component: OutputComponent,
  },
  {
    path: 'lazy',
    loadComponent: () =>
      import('./components/lazy/lazy.component').then((m) => m.LazyComponent),
  },
];
