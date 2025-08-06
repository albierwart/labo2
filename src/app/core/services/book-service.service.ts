import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";
import { Observable, tap } from "rxjs";
import { IBook } from "../models/ibook";
import { ActivatedRoute } from "@angular/router";

@Injectable({
    providedIn: "root"
})
export class bookServices{
    private readonly _httpClient = inject(HttpClient);

    public books= signal<IBook[]>([]);


    getBooks(): Observable<IBook[]>{
        return this._httpClient.get<IBook[]>("http://localhost:3000/books").pipe(tap(books => this.books.set(books)));
    }

    getbook(id:number): Observable<IBook>{
        return this._httpClient.get<IBook>(`http://localhost:3000/books/${id}`)
    }

    createBook(IBook: Omit<IBook, "id">): Observable<IBook>{
        return this._httpClient.post<IBook>("http://localhost:3000/books", IBook)
    }

    updateBook( Book: IBook) : Observable<IBook>{
        return this._httpClient.put<IBook>(`http://localhost:3000/books/${Book.id}`, Book);
    }

    deleteBook(id:number): Observable<void>{
        return this._httpClient.delete<void>(`http://localhost:3000/books/${id}`)
    }

    
}
