import { Component } from '@angular/core';
import { UserService, UserResponse } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  constructor(private userService: UserService) {}

  users!: UserResponse[];
  isLoading: boolean = false;

  ngOnInit() {
    this.getUserList();
  }

  getUserList() {
    this.isLoading = true;
    this.userService.getUsers().subscribe((res) => {
      this.users = res.data;
      this.isLoading = false;
    });
  }

  deleteUser(event: any, id: number) {
    if (confirm('Está certo disso?')) {
      event.target.innerText = 'Deletando';

      this.userService.deleteUser(id).subscribe((res) => {
        this.getUserList();
      });
    }
  }
}
