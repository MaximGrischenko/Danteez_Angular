import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { servicesRouting } from './services.routing';
import { ServicesComponent} from './services.component';
import { ServiceComponent } from './service-component/service.component';

const components = [ServicesComponent, ServiceComponent];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    HttpClientModule,
    servicesRouting,
  ],
  bootstrap: [ServicesComponent]
})

export class ServicesModule {}
