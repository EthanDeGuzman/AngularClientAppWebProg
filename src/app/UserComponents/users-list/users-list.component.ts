import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UserListComponent implements OnInit {

  userList: User[] = [];
  message: string = "";

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (value: User[]) => this.userList = value,
      complete: () => console.log('book service finished'),
      error: (mess) => this.message = mess
    })
  }

  dismissAlert() {
    this.message = "";
}

}