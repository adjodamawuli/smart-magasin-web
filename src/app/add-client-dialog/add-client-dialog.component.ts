import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormControl, Validators} from '@angular/forms';
import { Client } from './../models/client';
import { ClientService } from './../services/client.service';

@Component({
  selector: 'app-add-client-dialog',
  templateUrl: './add-client-dialog.component.html',
  styleUrls: ['./add-client-dialog.component.css']
})
export class AddClientDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddClientDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Client,
    public dataService: ClientService) { }

    formControl = new FormControl('', [
    Validators.required
    // Validators.email,
    ]);

    getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
    this.formControl.hasError('email') ? 'Not a valid email' :
    '';
    }

    submit() {
    // emppty stuff
    }

    onNoClick(): void {
    this.dialogRef.close();
    }

    public confirmAdd(): void {
    this.dataService.addClient(this.data);
    }

    ngOnInit() {
    }

}
