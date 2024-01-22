import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CouteroperationRoutingModule } from './couteroperation-routing.module';
import { CouterComponent } from '../couter/couter.component';


@NgModule({
  declarations: [CouterComponent],
  imports: [
    CommonModule,
    CouteroperationRoutingModule
  ]
})
export class CouteroperationModule { }
