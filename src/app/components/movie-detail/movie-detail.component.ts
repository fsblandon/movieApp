import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  @Input('movieselected') movieselected: Movie;

  movie: Movie = {
    title: '',
    release: new Date(),
    description: '',
    image: ''
  }

  constructor(private router: Router) { }

  ngOnInit() {
    if (this.movieselected !== undefined) {
      this.movie = this.movieselected;
    }
  }

  ngOnChanges(){
    if (this.movieselected !== undefined) {
      this.movie = this.movieselected;
    }
  }
  goToAddMovie() {
    this.router.navigateByUrl('addmovie');
  }

}
