import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = "https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceAttributes=age,gender";

  constructor(private http: Http) { }

  getPersonAge(imageUrl: string){
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': 'fbdb7bd45baf4c9080ab57f81332c2ca'
    });
    console.log(imageUrl);

    const options = new RequestOptions({ headers });

    return this.http.post(this.url,{url : imageUrl}, options).pipe(
      map(res => res.json()),
      // catchError(this.errorHandler)
    );

    // return this.http.post(this.url, { url: imageUrl }, options).pipe(
    //   map(res => res.json()),
    //   catchError(this.errorHandler)
    // );
  }

  // errorHandler(err: Response){
  //   return Observable.throw(err);
  // }
}
