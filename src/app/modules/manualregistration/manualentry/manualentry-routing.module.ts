import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManualregistrationComponent } from '../manualregistration/manualregistration.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'Manualentry'
  },
  {
    path: 'Manualentry',
    component: ManualregistrationComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManualentryRoutingModule { }
