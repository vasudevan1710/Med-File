import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManualentryRoutingModule } from './manualentry-routing.module';
import { ManualregistrationComponent } from '../manualregistration/manualregistration.component';
import { MaterialModule } from 'app/shared/material/material.module';
import { IndividualregistrationComponent } from '../individualregistration/individualregistration.component';
import { NewpatientaddComponent } from '../newpatientadd/newpatientadd.component';


@NgModule({
  declarations: [ManualregistrationComponent,IndividualregistrationComponent, NewpatientaddComponent],
  imports: [
    CommonModule,
    ManualentryRoutingModule,MaterialModule,
  ]
})
export class ManualentryModule { }
