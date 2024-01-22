import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BilldischargeComponent } from '../billdischarge/billdischarge.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'billing'
  },
  {
    path: 'billing',
    component: BilldischargeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillingdischargeRoutingModule { }
