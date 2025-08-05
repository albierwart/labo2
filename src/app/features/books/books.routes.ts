import { Routes } from '@angular/router';

export const routes: Routes = [

    {
         path: "",
         loadComponent: () =>
            import("./book-list/book-list.component").then(c => c.BookListComponent)
    },
    {
        path: "book/create",
        loadComponent: () =>
            import("./book-create/book-create.component").then(c => c.BookCreateComponent)
    },
    {
        path: "book/:id/view",
        loadComponent: () =>
            import("./book-details/book-details.component").then(c =>c.BookDetailsComponent)
    },
    {
        path: "book/:id/edit",
        loadComponent: () =>
            import("./book-update/book-update.component").then(c =>c.BookUpdateComponent)
    }
   
    
];


