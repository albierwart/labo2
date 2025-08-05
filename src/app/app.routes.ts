import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home/home.component';

export const routes: Routes = [

    {
        path:"",
        component:HomeComponent,
    },
    {
        path: "books",
        loadChildren:()=>
            import("./features/books/books.routes").then(r => r.routes)
    },
    {
        path: "users",
        loadChildren:() =>
            import("./features/users/users.routes").then(r => r.routes)
    },
    {
        path: "products",
        loadChildren:() =>
            import("./features/product/product.routes").then(r => r.routes)
    }
];
