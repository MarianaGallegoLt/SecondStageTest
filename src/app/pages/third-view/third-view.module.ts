import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThirdViewRoutingModule } from './third-view-routing.module';
import { ThirdViewLinkComponent } from './third-view-link/third-view-link.component';


@NgModule({
  declarations: [
    ThirdViewLinkComponent
  ],
  imports: [
    CommonModule,
    ThirdViewRoutingModule
  ]
})
export class ThirdViewModule { }
