import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicesComponent } from './services.component';

const servicesRoutes: Routes = [{
  path: '',
  component: ServicesComponent,
}];

export const servicesRouting: ModuleWithProviders = RouterModule.forChild(servicesRoutes);
