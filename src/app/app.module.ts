import { UserService } from './services/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {
  MatButtonModule, MatDialogModule, MatIconModule, MatInputModule, MatPaginatorModule, MatSortModule,
  MatTableModule, MatToolbarModule,
} from '@angular/material';
import {DataService} from './services/data.service';
import {AddDialogComponent} from './dialogs/add/add.dialog.component';
import {EditDialogComponent} from './dialogs/edit/edit.dialog.component';
import {DeleteDialogComponent} from './dialogs/delete/delete.dialog.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FactureComponent } from './facture/facture.component';
import { ClientComponent } from './client/client.component';
import {ClientService} from './services/client.service';
import { AddClientDialogComponent } from './add-client-dialog/add-client-dialog.component';
import { DeleteClientDialogComponent } from './delete-client-dialog/delete-client-dialog.component';
import { EditClientDialogComponent } from './edit-client-dialog/edit-client-dialog.component';
import { LoginComponent } from './login/login.component';


const routes = [
  { path: 'client', component: ClientComponent},
  { path: '', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AddDialogComponent,
    EditDialogComponent,
    DeleteDialogComponent,
    FactureComponent,
    ClientComponent,
    AddClientDialogComponent,
    DeleteClientDialogComponent,
    EditClientDialogComponent,
    LoginComponent
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  entryComponents: [
    AddDialogComponent,
    EditDialogComponent,
    DeleteDialogComponent,
    AddClientDialogComponent,
    DeleteClientDialogComponent,
    EditClientDialogComponent
  ],
  providers: [
    DataService,
    ClientService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
