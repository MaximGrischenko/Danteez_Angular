import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'app',
    loadChildren: './modules/homepage-module/homepage.module#HomepageModule'
  },
  {
    path: 'support',
    loadChildren: './modules/support-module/support.module#SupportModule'
  }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
