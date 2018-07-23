import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage.component';
import { ColleagueComponent } from '../../components/colleague-component/colleague.component';
import { CompaniesComponent } from '../../components/companies-component/companies.component';
import { FeedComponent } from '../../components/feed-component/feed.component';

const homepageRoutes: Routes = [{
  path: '',
  component: HomepageComponent,
  children: [
    { path: 'feed', component: FeedComponent },
    { path: 'colleague', component: ColleagueComponent },
    { path: 'companies', component: CompaniesComponent },
    { path: 'services', loadChildren: '../services-module/services.module#ServicesModule' },
  ]
}];

export const homepageRouting: ModuleWithProviders = RouterModule.forChild(homepageRoutes);
