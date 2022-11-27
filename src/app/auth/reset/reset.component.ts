import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  constructor(
    private httpClient:HttpClient, 
    private matSnackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  onResetpass(resetForm: NgForm){
    this.httpClient
    .post(
      `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${environment.firebaseApiKey}`, 
      {...resetForm.value, requestType: 'PASSWORD_RESET'}
    )
    .subscribe(
      ()=> {

      this.matSnackBar.open("Email Send!", "Ok", {
        verticalPosition:"top",
        horizontalPosition: "center",
        
      })
      
      this.router.navigate(['auth/login']);
    }, error =>{
      let errorMessage ="Operation Failed - " + error.error.error.message;

      this.matSnackBar.open(errorMessage, "Ok", {
        verticalPosition:"top",
        horizontalPosition: "center",
        
      })

    }
    );
  }

}
