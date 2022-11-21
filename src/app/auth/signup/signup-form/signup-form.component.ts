import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

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
    private matSnackBar: MatSnackBar

    ){}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.signupForm.value);

    this.httpClient
    .post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseApiKey}`, 
      {...this.signupForm.value, returnSecureToken: true}
    )
    .subscribe((response)=> {
      console.log(response);
      this.signupForm.reset();

      this.matSnackBar.open("Account Created", "Ok", {
        verticalPosition:"top",
        horizontalPosition: "center",
        
      })
      
      this.router.navigate(['/auth/login']);
      
    }, error =>{
      let errorMessage ="Signup Failed - " + error.error.error.message;

      this.matSnackBar.open(errorMessage, "Ok", {
        verticalPosition:"top",
        horizontalPosition: "center",
        
      })

    }
    );
  }
}