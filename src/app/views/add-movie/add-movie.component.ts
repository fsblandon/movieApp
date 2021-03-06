import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {
  

  movieForm: FormGroup;

  movies: Movie[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private route: Router
  ) { }

  ngOnInit() {
    this.movieForm = this.formBuilder.group({
      title: ['', Validators.required],
      release: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  changeListener(event: any) {
    this.readThis(event.target);
  }

  readThis(inputValue: any): void {
    let file: File = inputValue.files[0];
    let myReader: FileReader = new FileReader();
    let result: string;
  
    if (file) {
      myReader.readAsDataURL(file);
    }
  
    myReader.onload = () => {
      result = myReader.result.toString().split(',')[1];
      this.movieForm.controls['image'].setValue(result);
    }
    
  }

  addMovie() {
    if(JSON.parse(localStorage.getItem('movies'))) {
      this.movies = JSON.parse(localStorage.getItem('movies'));
      this.movies.push(this.movieForm.value);
      localStorage.setItem('movies', JSON.stringify(this.movies));
    } else {
      this.movies.push(this.movieForm.value);
      localStorage.setItem('movies', JSON.stringify(this.movies));
    }
    this.movieForm.reset();
    this.route.navigateByUrl('home');
  }

}
