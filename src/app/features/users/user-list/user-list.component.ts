import { Component, inject, OnInit } from '@angular/core';
import { UserServiceService } from '../../../core/services/user-service.service';

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {
   private userService: UserServiceService = inject(UserServiceService)

  users = this.userService.users;

  ngOnInit(): void {
    this.userService.getUsers().subscribe();
  }


}
