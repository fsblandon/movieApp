import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopFiveRoutingModule } from './top-five-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TopFiveRoutingModule,
    SharedModule
  ]
})
export class TopFiveModule { }
