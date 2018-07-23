import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupportComponent } from './support.component';

const supportRoutes: Routes = [{
  path: '',
  component: SupportComponent
}];

export const supportRouting: ModuleWithProviders = RouterModule.forChild(supportRoutes);
