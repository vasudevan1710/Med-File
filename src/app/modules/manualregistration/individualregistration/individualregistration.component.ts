import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-individualregistration',
  templateUrl: './individualregistration.component.html',
  styleUrls: ['./individualregistration.component.scss']
})
export class IndividualregistrationComponent implements OnInit {
  componentVisibility: boolean = true;

  objAction: any = {
    isEditing: false,
    isView: false,
  }

  objActionUnchanged: any = {
    isEditing: false,
    isView: false,
  }

  constructor(
    private _formBuilder: FormBuilder,
    public _dialogRef: MatDialogRef<IndividualregistrationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public _router: Router,
     public _dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  public dialogClose(): void {
    this._dialogRef.disableClose = false;
    this._dialogRef.close();
  }

}
