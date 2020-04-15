
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public user: any = {
    username: '',
    password: '',
  }
  public errorMsg: string;
  public successMsg: string;
  constructor(public userService: UserService, public router: Router) { }

  ngOnInit(): void {
  }
  login(event) {
    event.preventDefault();
    this.userService.login(this.user)
      .subscribe(
        (res: HttpResponse<any>) => {
          const admins =['superAdmin','admin','dios'];
          const redirectRoute = admins.includes(res['user']['role']) ? '/admin':'/';
          this.successMsg=res['message'];
          this.userService.setUser(res['user']);
          this.userService.setToken(res['token']);
          localStorage.setItem('authToken',res['token']);
          
          setTimeout(() => this.router.navigate([redirectRoute]) , 2500);
        },
        (error: HttpErrorResponse) => {
          this.errorMsg = error.error.message;
          setTimeout(() => this.errorMsg ="", 2500);
        }

        
      )
  }
}




