import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss']
})
export class ListMoviesComponent implements OnInit {

  movies: Movie[] = [];

  @Output() sendMovie = new EventEmitter<Movie>();

  constructor() { }

  ngOnInit() {
    this.movies = JSON.parse(localStorage.getItem('movies'));
  }

  getMovie(movie: any) {
    this.sendMovie.emit(movie);
  }

}
