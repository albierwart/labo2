import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';

export const routes: Routes = [
    {
        path : "",
        loadComponent: () =>
            import("./user-list/user-list.component").then(c => c.UserListComponent)
    },
    {
        path : "users/create",
        loadComponent: () => 
            import("./user-create/user-create.component").then(c => c.UserCreateComponent)
    },
    {
        path : "users/:id/view",
        loadComponent: () =>
             import("./user-details/user-details.component").then(c => c.UserDetailsComponent)
    },
    {
           path : "users/:id/edit",
        loadComponent: () =>
             import("./user-update/user-update.component").then(c => c.UserUpdateComponent)
    }
  
    

];
