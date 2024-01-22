import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointsRoutingModule } from './appoints-routing.module';
import { AppointmentsComponent } from '../appointments/appointments.component';
import { MaterialModule } from 'app/shared/material/material.module';


@NgModule({
  declarations: [AppointmentsComponent],
  imports: [
    CommonModule,
    AppointsRoutingModule,MaterialModule
  ]
})
export class AppointsModule { }
