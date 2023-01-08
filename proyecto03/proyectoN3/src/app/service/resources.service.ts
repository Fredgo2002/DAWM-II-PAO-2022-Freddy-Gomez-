import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('https://api.api-onepiece.com/characters')
  }
  getData1() {
    return this.http.get('https://api.api-onepiece.com/fruits')
  }
  getData2() {
    return this.http.get('https://api.api-onepiece.com/movies')
  }

}
