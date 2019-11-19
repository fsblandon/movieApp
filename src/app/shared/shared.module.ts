import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../views/home/home.component';
import { AddMovieComponent } from '../views/add-movie/add-movie.component';
import { TopFiveComponent } from '../views/top-five/top-five.component';
import { ListMoviesComponent } from '../components/list-movies/list-movies.component';
import { MovieDetailComponent } from '../components/movie-detail/movie-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    AddMovieComponent,
    TopFiveComponent,
    ListMoviesComponent,
    MovieDetailComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    HomeComponent,
    AddMovieComponent,
    TopFiveComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
