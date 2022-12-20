import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/services/login.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-ForgetPassword',
  templateUrl: './ForgetPassword.component.html',
  styleUrls: ['./ForgetPassword.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  code = false;
  usernameMail: FormGroup;
  codeValidator: FormGroup;
  showSpinner = false;
  spinnerService;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(private formBuilder: FormBuilder,
              private service: LoginService,
              private route: Router,
              private snackBar: MatSnackBar) {

              }

  ngOnInit() {
    this.init();
  }

  init()
  {
    this.usernameMail = this.formBuilder.group({
      emailOrUsername: [null, Validators.required]
    });
    this.codeValidator = this.formBuilder.group({
      code: [null, Validators.required]
    });
  }

  fermer(){
    this.route.navigate(['/']);
  }

  onSubmit()
  {
    if (!this.code)
    {
      this.code = true;
      this.service.forgetPassword(this.usernameMail.value).subscribe(
        data => {
          console.log(data);
        },
        (err: HttpErrorResponse) => {
          console.log(err);
          this.spinnerService = false;
        }
      );
    }
    else{
      this.service.sendPassword(this.codeValidator.get('code').value).subscribe(
        () => {},
        (err: HttpErrorResponse) => {
          console.log(err);
          this.spinnerService = false;
          this.snackBar.open('Votre Password a été modifier avec success', 'OK', {
            duration: 5000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition

        });
          this.route.navigate(['/']);
        }
      );
    }
  }

}
