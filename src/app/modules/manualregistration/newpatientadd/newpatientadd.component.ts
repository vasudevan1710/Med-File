import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newpatientadd',
  templateUrl: './newpatientadd.component.html',
  styleUrls: ['./newpatientadd.component.scss']
})
export class NewpatientaddComponent implements OnInit {

  constructor( private _formBuilder: FormBuilder,
    public _dialogRef: MatDialogRef<NewpatientaddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public _router: Router,
     public _dialog: MatDialog,) { }

  ngOnInit(): void {
  }
  public dialogClose(): void {
    this._dialogRef.disableClose = false;
    this._dialogRef.close();
  }
}
