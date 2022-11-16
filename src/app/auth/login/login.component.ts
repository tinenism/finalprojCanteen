import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private httpClient:HttpClient, 
    private matSnackBar: MatSnackBar,
    private router: Router
    ) {}

  ngOnInit(): void {}

  onLogin(loginForm: NgForm){
    console.log(loginForm.value)
    
<<<<<<< HEAD

    this.httpClient
    .post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseApiKey}`, 
      {...loginForm.value, returnSecureToken: true}
    )
    .subscribe(
      ()=> {

      this.matSnackBar.open("Login Successful", "Ok", {
        verticalPosition:"top",
        horizontalPosition: "center",
        
      })
      
      this.router.navigate(['/']);
    }, error =>{
      let errorMessage ="Login Failed - " + error.error.error.message;

      this.matSnackBar.open(errorMessage, "Ok", {
        verticalPosition:"top",
        horizontalPosition: "center",
        
      })

    }
    );
  }
=======
>>>>>>> 9247181e12dce71119e4d25d4b37a04b9604294c

    this.httpClient
    .post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseApiKey}`, 
      {...loginForm.value, returnSecureToken: true}
    )
    .subscribe(
      ()=> {

      this.matSnackBar.open("Login Successful", "Ok", {
        verticalPosition:"top",
        horizontalPosition: "center",
        
      })
      
      this.router.navigate(['/']);
    }, error =>{
      let errorMessage ="Login Failed - " + error.error.error.message;

      this.matSnackBar.open(errorMessage, "Ok", {
        verticalPosition:"top",
        horizontalPosition: "center",
        
      })

    }
    );

  }
}
