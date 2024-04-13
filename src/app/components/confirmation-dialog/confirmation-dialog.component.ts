import { Component, Inject } from '@angular/core';
import { ConfirmationDialogModel } from '../../confirmation-dialog-model'


@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent {
  //title: string;
  //message: string;
  inputValue: string = '';

  constructor() {

  }

  onConfirm(): void {
    //this.dialogRef.close(this.inputValue);
  }

  onDismiss(): void {
    //this.dialogRef.close(false);
  }
}
