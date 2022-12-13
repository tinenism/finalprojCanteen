import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { environment } from 'src/environments/environment';

export function passwordsMatchValidator(): ValidatorFn{
  return(control: AbstractControl): ValidationErrors | null => {
    const password =control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    
    if(password && confirmPassword && password !== confirmPassword){
      return{
        passwordDontMatch: true
      }
    }
    return null;
  };
}

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  signupForm: FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
    Validators.required,
    Validators.minLength(5),
  ]),
  confirmPassword: new FormControl('', [Validators.required])
  });

  constructor(
    private httpClient:HttpClient, 
    private router: Router, 
    private matSnackBar: MatSnackBar,
    private authService: AuthenticationService,
    private toast: HotToastService,

    ){}

  ngOnInit(): void {}

  get name() {
    return this.signupForm.get('name');
  }
  
  get email() {
    return this.signupForm.get('email');
  }

  get password() {
    return this.signupForm.get('password');
  }

  get confirmPassword() {
    return this.signupForm.get('confirmPassword');
  }
  onSubmit(){
    if(!this.signupForm.valid) return;

    const {name, email, password } = this.signupForm.value;
    this.authService.signUp(name,email,password).pipe(
      this.toast.observe({
        success: 'Congrats! You are all signed up',
        loading: 'Signing in',
        error:({message}) => `${message}`
      })
    ).subscribe(() => {
      this.router.navigate(['/'])
    })
  }
}