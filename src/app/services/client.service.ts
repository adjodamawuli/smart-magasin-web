import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Client} from '../models/client';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable()
export class ClientService {

  private readonly API_URL = 'http://localhost:8080/smart/clients';

  dataChange: BehaviorSubject<Client[]> = new BehaviorSubject<Client[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;

  constructor (private httpClient: HttpClient) {}

  get data(): Client[] {
    return this.dataChange.value;
  }

  getDialogData() {
    return this.dialogData;
  }

   /** CRUD METHODS */
   getAllClients(): void {
    this.httpClient.get<Client[]>(this.API_URL).subscribe(data => {
        this.dataChange.next(data);
      },
      (error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
      });
  }

  // DEMO ONLY, you can find working methods below
  addClient (client: Client): void {
    this.dialogData = client;
  }

  updateClient (client: Client): void {
    this.dialogData = client;
  }

  deleteClient (id: number): void {
    console.log(id);
  }

}
