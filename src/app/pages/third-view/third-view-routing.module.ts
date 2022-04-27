import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThirdViewLinkComponent } from './third-view-link/third-view-link.component';

const routes: Routes = [
  {
    path:'',
    component: ThirdViewLinkComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThirdViewRoutingModule { }
