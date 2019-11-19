import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddMovieRoutingModule } from './add-movie-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AddMovieRoutingModule,
    SharedModule
  ]
})
export class AddMovieModule { }
