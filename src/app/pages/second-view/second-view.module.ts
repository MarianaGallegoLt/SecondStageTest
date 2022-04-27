import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondViewRoutingModule } from './second-view-routing.module';
import { SecondViewLinkComponent } from './second-view-link/second-view-link.component';


@NgModule({
  declarations: [
    SecondViewLinkComponent
  ],
  imports: [
    CommonModule,
    SecondViewRoutingModule
  ]
})
export class SecondViewModule { }
