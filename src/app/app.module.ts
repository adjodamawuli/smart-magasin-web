import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


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


@NgModule({
  declarations: [
    AppComponent,
    AddDialogComponent,
    EditDialogComponent,
    DeleteDialogComponent,
    FactureComponent,
    ClientComponent,
    AddClientDialogComponent
,
    DeleteClientDialogComponent
,
    EditClientDialogComponent
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
    ReactiveFormsModule
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
    ClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
