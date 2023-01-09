import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = "https://jsonplaceholder.typicode.com/todos";
constructor(private http: HttpClient) { }
user() {
  return this.http.get(this.url);
}
}
