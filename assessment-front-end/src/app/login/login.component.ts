import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder } from '@angular/forms';

import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from '../services/login.service';
import { FormWrapperComponent } from '../shared-ui/form-wrapper/form-wrapper.component';
import { FormTemplate } from '../types/form-template';
import User from '../types/user';

const DIALOG_OPTIONS = {
  disableClose: true
};
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loginFormTemplate: FormTemplate = {
  showSubmitBtn: true,
  fields: [
  {
    "type": "gaggle-input",
    "errorIcon": 'alert',
    "label": 'Username',
    "ctrlName": 'username',
    "clearBtn": true,
    "required": true
  },
  {
    "type": "gaggle-input",
    "errorIcon": 'alert',
    "label" :'Password',
    "toggleBtn": true,
    "fieldTextType": 'password',
    "ctrlName": 'password',
    "clearBtn": true,
    "required": true,
  },
  {
    "type": "checkbox",
    "ctrlName": 'remember',
    "label": 'Remember',
    "defaultValue": false
  }
]};

  registerFormTemplate: FormTemplate = {
    showSubmitBtn: false,
    fields: [
    {
      "type": "gaggle-input",
      "errorIcon": 'alert',
      "label": 'Username',
      "ctrlName": 'username',
      "clearBtn": true,
      "required": true
    },
    {
      "type": "gaggle-input",
      "errorIcon": 'alert',
      "label" :'Password',
      "toggleBtn": true,
      "fieldTextType": 'password',
      "ctrlName": 'password',
      "clearBtn": true,
      "required": true,
      "minLength": 8
    },
    {
      "type": "gaggle-input",
      "errorIcon": 'alert',
      "label": 'Email',
      "ctrlName": 'email',
      "fieldTextType": 'email',
      "clearBtn": true,
      "required": true,
      "email": true
    },
  ]
};

  forgotPasswordTemplate: FormTemplate = {
    showSubmitBtn: false,
    fields: [
    {
      "type": "gaggle-input",
      "errorIcon": 'alert',
      "label": 'Email',
      "ctrlName": 'email',
      "fieldTextType": 'email',
      "clearBtn": true,
      "required": true,
      "email": true
    }
  ]};


  @ViewChild('register') register!: FormWrapperComponent;
  @ViewChild('forgot') forgot!: FormWrapperComponent;

  forgotPasswordRequestSent: boolean = false;

  errorMessage: string = '';
  submission$!: Subscription;

  private dialogRef!: MatDialogRef<any>;

  constructor(private _router: Router, private _dialog: MatDialog, private _fb: FormBuilder,
    private _loginService: LoginService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
  }

  clearInput = ($inputCtrl: AbstractControl | null) => {
    $inputCtrl?.reset();
  }

  onSubmit = (formData: User) => {
    let { username, password, email} = formData;
    this.submission$ = this._loginService.loginUser(username, password, email).subscribe((response: {status: number, message: string}) => {
      let status = response.status;
      switch (status) {
        case 200:
          this._snackBar.open(response.message, '', {
            duration: 2000,
            verticalPosition: 'top',
            panelClass: 'snackbar-success'
          });
          this._loginService.updateAuthStatus(true);
          this._router.navigateByUrl('/dashboard')
          break;
        case 401:
          this.errorMessage = response.message
          this._snackBar.open(this.errorMessage, '', {
            duration: 2000,
            verticalPosition: 'top',
            panelClass: 'snackbar-error'
          });
          break;
        default:
          console.log(response.message);
          break;
      }
    })
  }

  showDialog = (templateRef: TemplateRef<FormWrapperComponent>) => {
     this.dialogRef = this._dialog.open(templateRef, DIALOG_OPTIONS);
  }

  registerUser() {
    if(this.register.form.valid) {
      this.dialogRef.close();
      this.onSubmit(this.register.form.value);
    } else{
      this.register.form.markAllAsTouched();
    }
  }

  forgotPasswordRequest() {
    if(this.forgot.form.valid) {
      this.forgotPasswordRequestSent = true;
    }
  }

  ngOnDestroy() {
    if(this.submission$) {
      this.submission$.unsubscribe();
    }
  }
}
