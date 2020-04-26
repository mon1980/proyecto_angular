import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private token: string = "";
  private user:object={};
  public users:object=[];

  constructor(public httpClient: HttpClient) { }
  
  login(user: object): Observable<any> {
    return this.httpClient.post('http://localhost:3000/users/login', user);
  }
  register(user: object) {
    return this.httpClient.post('http://localhost:3000/users/register', user);
  }

  setUsers(users: object[]): void {
    this.users = users;

  }
  setToken(token: string): void {
    this.token = token;
  }
  getToken(): string {
    return this.token;
  }
  setUser(user: object): void {
    this.user = user;
  }
  getUser(): object {
    return this.user;
  }
  getUserInfo(token: string) {
    return this.httpClient.get('http://localhost:3000/users/info', {
      headers: {
        authorization: token
      }
    })
  }

  getAll(): Observable<any> {
    this.token = localStorage.getItem('authToken');
    return this.httpClient.get('http://localhost:3000/users', {headers: {Authorization: this.token}});
  }


}





