import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/models/movie';

@Injectable({
  providedIn: 'root'
})
export class TopFiveService {

  URL = 'http://www.mocky.io/v2/5dc3c053300000540034757b'

  constructor(
    private httpClient: HttpClient
  ) { }

  getTop(): Observable<Movie> {
    return this.httpClient.get<Movie>(this.URL)
  }
}
