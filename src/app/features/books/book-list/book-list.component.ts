import { Component, OnInit, inject } from '@angular/core';
import { bookServices } from '../../../core/services/book-service.service';

@Component({
  selector: 'app-book-list',
  imports: [],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})

export class BookListComponent implements OnInit {
   private booksService: bookServices = inject(bookServices);

   books = this.booksService.books;

   ngOnInit(): void {
     this.booksService.getBooks().subscribe();
   }
}
