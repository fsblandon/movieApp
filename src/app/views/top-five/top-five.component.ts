import { Component, OnInit } from '@angular/core';
import { TopFiveService } from './top-five.service';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-top-five',
  templateUrl: './top-five.component.html',
  styleUrls: ['./top-five.component.scss'],
  providers: [TopFiveService]
})
export class TopFiveComponent implements OnInit {

  movies: Movie[] = [];

  constructor(private topService: TopFiveService) { }

  ngOnInit() {
    this.topService.getTop().subscribe(
      (data: any) => {
        this.movies = data.movies;
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
