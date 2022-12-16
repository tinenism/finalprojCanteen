import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required])
  })
  constructor(
    private httpClient:HttpClient, 
    private matSnackBar: MatSnackBar,
    private router: Router,
    private authService:AuthenticationService,
    private toast: HotToastService
    ) {}

  ngOnInit(): void {}
  
  get email() {
    return this.loginForm.get('email');
  }
  get password(){
    return this.loginForm.get('password')
  }
    submit(){
      if (!this.loginForm.valid){
        return;
      }
      const {email,password} = this.loginForm.value;
      this.authService.login(email,password).pipe(
        this.toast.observe({
          success: 'Logged in successfully',
          loading: 'Logging in ...',
          error: 'There was an Error'
        })
      ).subscribe(()=> {
        this.router.navigate(['/']);
      });
    }

  }

