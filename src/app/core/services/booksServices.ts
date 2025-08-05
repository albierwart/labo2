import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class booksServices{
    private readonly _httpClient = inject(HttpClient);

    getBooks(){
        return this._httpClient.get
    }
    
}
