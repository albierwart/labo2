import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-details',
  imports: [],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss'
})
export class BookDetailsComponent {
    private readonly _activateRoute: ActivatedRoute = inject(ActivatedRoute)

    public idBook: string | null= null;

    bgOnInit(){
      this._activateRoute.queryParams.subscribe({
        next: params => {
          const str = JSON.stringify(params);
          if(str.length > 2){
            this.idBook = JSON.stringify(params);
          }
        }
      });
    }
}
