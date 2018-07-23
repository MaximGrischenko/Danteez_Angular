import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { homepageRouting } from './homepage.routing';
import { HomepageComponent } from './homepage.component';
import { FeedComponent } from '../../components/feed-component/feed.component';
import { ColleagueComponent } from '../../components/colleague-component/colleague.component';
import { CompaniesComponent } from '../../components/companies-component/companies.component';

import { HeaderComponent } from '../../components/header-component/header.component';
import { SidebarComponent } from '../../components/sidebar-component/sidebar-component';
import { NavigationComponent } from '../../components/sidebar-component/navigation-component/navigation.component';
import { AdvertisementComponent,
         AdvertisementItemElement } from '../../components/sidebar-component/advertisement-component/advertisement.component';
import { AdvertisementItemDirective } from '../../components/sidebar-component/advertisement-component/advertisement-item.directive';
import { CompaniesListComponent } from '../../components/sidebar-component/companies-list-component/companies-list.component';
import { CompanyComponent } from '../../components/sidebar-component/companies-list-component/company-component/company.component';
import { UsersListComponent } from '../../components/sidebar-component/users-list-component/users-list.component';
import { UserComponent } from '../../components/sidebar-component/users-list-component/user-component/user.component';
import { ProductsListComponent } from '../../components/sidebar-component/products-list-component/products-list.component';
import { ProductComponent } from '../../components/sidebar-component/products-list-component/product-component/product.component';

const components = [HomepageComponent, FeedComponent, ColleagueComponent, CompaniesComponent,
  HeaderComponent, SidebarComponent, NavigationComponent, AdvertisementComponent, AdvertisementItemDirective,
  AdvertisementItemElement, CompaniesListComponent, CompanyComponent, UsersListComponent,
  UserComponent, ProductsListComponent, ProductComponent];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    homepageRouting,
  ],
  bootstrap: [HomepageComponent]
})

export class HomepageModule {}
