import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, Validators, AbstractControl, FormBuilder } from '@angular/forms';

import {MatDialog} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from '../services/login.service';
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

  loginForm: FormGroup = this._fb.group({
    username: this._fb.nonNullable.control('', {
      validators: [Validators.required]
    }),
    password: this._fb.nonNullable.control('', {
      validators: [Validators.required]
    }),
    remember: this._fb.nonNullable.control(false),
  });

  get username(): AbstractControl | null  {
    return this.loginForm.get('username');
  }

  get password(): AbstractControl | null {
    return this.loginForm.get('password');
  }

  get email(): AbstractControl | null {
    return this.loginForm.get('email');
  }

  showPassword:boolean = false;
  errorMessage: string = '';
  submission$!: Subscription;

  constructor(private _router: Router, private _dialog: MatDialog, private _fb: FormBuilder,
    private _loginService: LoginService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {

  }

  toggleShowPassword = () => {
    this.showPassword = !this.showPassword;
  }

  clearInput = ($inputCtrl: AbstractControl | null) => {
    $inputCtrl?.reset();
  }

  onSubmit = (formData: User) => {
    console.log(formData);
    let user: {username: string, password: string} = {
      username: this.username?.value,
      password: this.password?.value
    }
    let { username, password} = user;
    this.submission$ = this._loginService.loginUser(username, password).subscribe((response: {status: number, message: string}) => {
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

  showDialog = (templateRef?: TemplateRef<any>) => {
      templateRef && this._dialog.open(templateRef, DIALOG_OPTIONS);
  }

  ngOnDestroy() {
    if(this.submission$) {
      this.submission$.unsubscribe();
    }
  }
}
