import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { IUser } from '../models/iuser';
import { Observable, tap } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }

  private readonly _httpClient = inject(HttpClient)

  public users = signal<IUser[]>([]);

    getUsers(): Observable<IUser[]>{
          return this._httpClient.get<IUser[]>("http://localhost:3000/users").pipe(tap(users => this.users.set(users)));
      }
  
      getUser(id:number): Observable<IUser>{
          return this._httpClient.get<IUser>(`http://localhost:3000/users/${id}`)
      }
  
     
  
      updateUser( user: IUser) : Observable<IUser>{
          return this._httpClient.put<IUser>(`http://localhost:3000/users/${user.id}`, user);
      }
  
      deleteUser(id:number): Observable<void>{
          return this._httpClient.delete<void>(`http://localhost:3000/users/${id}`)
      }
}
