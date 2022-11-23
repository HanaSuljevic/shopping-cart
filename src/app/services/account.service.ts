import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { accountUrl, baseUrl } from '../config/api';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(public http: HttpClient) { }

  registracion(user: User): Observable<User> {
    return this.http.post<User>(accountUrl, user);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(accountUrl);
  }
}
