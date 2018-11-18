import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ClientService} from '../services/client.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-client-dialog',
  templateUrl: './edit-client-dialog.component.html',
  styleUrls: ['./edit-client-dialog.component.css']
})
export class EditClientDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditClientDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public clientService: ClientService) { }

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

    stopEdit(): void {
    this.clientService.updateClient(this.data);
    }

  ngOnInit() {
  }

}
