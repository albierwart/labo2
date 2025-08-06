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
      this._activateRoute.paramMap.subscribe(params =>{
        this.idBook = params.get('id');
      });
    }
}
