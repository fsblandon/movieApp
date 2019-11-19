import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {
  

  movieForm: FormGroup;

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
    localStorage.setItem('movie', JSON.stringify(this.movieForm.value));
    this.movieForm.reset();
    this.route.navigateByUrl('home');
  }

}
