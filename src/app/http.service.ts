import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/model/user';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  urlUser = 'http://localhost:3000/users/';
  urlMovie = 'http://localhost:3001/movies/';

  // const httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type':  'application/json',
  //   })};

  constructor(private http: HttpClient) { }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.urlUser, user);
  }

  loginUser(user: User): Observable<User> {
    const urlTemp = this.urlUser + user.id;
    return this.http.get<User>(urlTemp);
  }

  getAllMovies() {
    return this.http.get(this.urlMovie);
  }

  addFavorite(user: string, favoriteId: string): Observable<User> {
    const urlTemp = this.urlUser + user;
    return this.http.put<User>(urlTemp, user);
  }
}
