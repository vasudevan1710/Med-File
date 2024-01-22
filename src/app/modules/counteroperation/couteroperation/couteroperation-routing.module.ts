import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CouterComponent } from '../couter/couter.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'couter'
  },
  {
    path: 'couter',
    component: CouterComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CouteroperationRoutingModule { }
