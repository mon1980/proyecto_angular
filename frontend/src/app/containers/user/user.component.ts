import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
 
  constructor(public userService: UserService) { }

  ngOnInit(): void {

    this.userService.getAll()
    .subscribe(
      res => this.userService.setUsers(res), 
      error => console.log(error)
    );
  }

}
