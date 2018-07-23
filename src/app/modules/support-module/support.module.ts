import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule }   from '@angular/forms';

import { SupportComponent } from "./support.component";
import {supportRouting} from "./support.routing";

@NgModule({
  declarations: [SupportComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    supportRouting,
  ],
  bootstrap: [SupportComponent]
})

export class SupportModule {}
