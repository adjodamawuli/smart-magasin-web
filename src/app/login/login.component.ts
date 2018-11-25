import { User } from './../models/user';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public login: string;
  public password: string;

  constructor(private router: Router, public userService: UserService)  { }


  ngOnInit() {
  }

  loggedIn(): void {

    if (this.userService.checkIfExist(this.login, this.password)) {
      this.router.navigateByUrl('/client');
    }
  }

}
