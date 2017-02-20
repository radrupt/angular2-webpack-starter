import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { TestComponent } from './test';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',      component: HomeComponent },
  { path: 'test',  component: TestComponent },

];
