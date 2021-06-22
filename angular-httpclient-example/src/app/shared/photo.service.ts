import { Injectable } from '@angular/core';

import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class Photo {
  albumId!: string;
  ID!: string;
  title!: string;
  url!: string;
  thumbnailUrl!: string;
}

@Injectable({
  providedIn: 'root'
})

export class PhotoService {

  // REST API
  endpoint = 'https://jsonplaceholder.typicode.com';

  constructor(private httpClient: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  getPhotos(): Observable<Photo> {
    return this.httpClient.get<Photo>(this.endpoint + '/photos')
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  getSinglePhoto(id: string): Observable<Photo> {
    return this.httpClient.get<Photo>(this.endpoint + '/photos/' + id)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }  

  processError(err: { error: { message: string; }; status: any; message: any; }) {
     let message = '';
     if(err.error instanceof ErrorEvent) {
      message = err.error.message;
     } else {
      message = `Error Code: ${err.status}\nMessage: ${err.message}`;
     }
     console.log(message);
     return throwError(message);
  }
  
}
