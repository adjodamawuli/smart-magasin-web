import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ClientService} from '../services/client.service';

@Component({
  selector: 'app-delete-client-dialog',
  templateUrl: './delete-client-dialog.component.html',
  styleUrls: ['./delete-client-dialog.component.css']
})
export class DeleteClientDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteClientDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public clientService: ClientService) { }

    onNoClick(): void {
    this.dialogRef.close();
    }

    confirmDelete(): void {
    this.clientService.deleteClient(this.data.id);
    }

    ngOnInit() {
    }

}
