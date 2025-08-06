import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { catchError, Observable, of, tap } from 'rxjs';
import { IUser } from '../../core/models/iuser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  private readonly _httpClient: HttpClient = inject(HttpClient)
  private apiUrl = 'http://localhost:3000';

  register(userData:IUser): Observable<any>{
      return this._httpClient.post<any>(`{this.apiUrl}/register`, userData).pipe(
        tap(response => {
          if(response.success){
            console.log("enregistrement reussi")
          }
  }),
        catchError(error =>{
          console.error("erreur a l enregistrement", error);
          return of({
            success:false,
            message: error.error?.message || "erreur inconnue"
          })
        }
        )
      );
  }







  
}
