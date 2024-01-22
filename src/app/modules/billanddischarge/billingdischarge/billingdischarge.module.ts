import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillingdischargeRoutingModule } from './billingdischarge-routing.module';
import { BilldischargeComponent } from '../billdischarge/billdischarge.component';


@NgModule({
  declarations: [BilldischargeComponent],
  imports: [
    CommonModule,
    BillingdischargeRoutingModule
  ]
})
export class BillingdischargeModule { }
