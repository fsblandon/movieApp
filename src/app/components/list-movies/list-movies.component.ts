import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss']
})
export class ListMoviesComponent implements OnInit {

  movies: Movie[] = [];

  constructor() { }

  ngOnInit() {
    this.movies.push(JSON.parse(localStorage.getItem('movie')));
  }

}
