import { User } from './../models/user';
import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable()
export class UserService {

  private readonly API_URL = 'http://localhost:8080/smartUser/users/';

  data: any;

  constructor (private httpClient: HttpClient) {}

  getData(): User {
    return this.data;
  }

  checkIfExist(login: string, password: string): User {

    this.httpClient.get<User>(this.API_URL + login + '/' + password).subscribe(data => {
      this.data = data;
    },
    (error: HttpErrorResponse) => {
    console.log (error.name + ' ' + error.message);
    });

    return this.data;
  }



}
