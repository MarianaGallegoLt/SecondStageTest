import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondViewLinkComponent } from './second-view-link/second-view-link.component';

const routes: Routes = [
  {
    path:'',
    component: SecondViewLinkComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondViewRoutingModule { }
