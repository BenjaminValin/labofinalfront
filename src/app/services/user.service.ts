import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from '../models/order.model';
import { User } from '../models/user.model';
import { UserRegister } from '../models/userRegister.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private BASE_URL = 'http://localhost:8080/users'

  constructor(
    private httpClient: HttpClient,
    private router : Router
    ) { }

  getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.BASE_URL);
  }

  getByID(id): Observable<User> {
    return this.httpClient.get<User>(this.BASE_URL + "/" + id);
  }

  delete(id): Observable<User> {
    return this.httpClient.delete<User>(this.BASE_URL + "/" + id);
  }

  insert(user: UserRegister) {
    return this.httpClient.post<UserRegister>(this.BASE_URL, user).subscribe({
      next : () => this.router.navigate(['']),
      error : (error) => console.log(error)
    })
  }

  update(id, user: User): Observable<User> {
    console.log("J'UPDATE");
    this.router.navigate(['/user']);
    return this.httpClient.put<User>(this.BASE_URL + "/" + id, user);
    
  }

  
  
}
