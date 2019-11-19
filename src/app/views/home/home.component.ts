import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movie: Movie;

  constructor() { }

  ngOnInit() {
  }

  getMovie(event: any) {
    this.movie = event;
  }

}
