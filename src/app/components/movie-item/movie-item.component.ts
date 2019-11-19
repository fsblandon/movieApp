import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {

  @Input('datamovie') datamovie: Movie;

  movies: Movie[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
    this.movies = JSON.parse(localStorage.getItem('movies'));
  }

  deleteMovie(movie: any) {
    if (movie) {
      this.movies.splice(movie, 1);
      localStorage.setItem('movies', JSON.stringify(this.movies));
      this.router.navigateByUrl('/home');
    }
  }

}
