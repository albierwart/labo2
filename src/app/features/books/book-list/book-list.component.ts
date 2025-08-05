import { Component, OnInit, inject } from '@angular/core';
import { booksServices } from '../../../core/services/booksServices';

@Component({
  selector: 'app-book-list',
  imports: [],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})

export class BookListComponent implements OnInit {
   private booksService: booksServices = inject(booksServices);

   books = this.booksService.books;

   ngOnInit(): void {
     this.booksService.getBooks().subscribe();
   }
}
