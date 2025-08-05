import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        loadComponent: () =>
            import("./product-list/product-list.component").then(c => c.ProductListComponent)
    },
    {
        path: "products/create",
        loadComponent: () =>
            import("./product-create/product-create.component").then(c => c.ProductCreateComponent)
    },
    {
        path: "product/:id/view",
        loadComponent: () =>
            import("./product-details/product-details.component").then(c => c.ProductDetailsComponent)
    },
    {
        path:"product/:id/edit",
        loadComponent: () =>
            import("./product-update/product-update.component").then(c => c.ProductUpdateComponent)
    }
  
];

  