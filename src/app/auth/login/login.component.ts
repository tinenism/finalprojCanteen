import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {}

  onLogin(loginForm: NgForm){
    const url = "https://a-l-f-4f566-default-rtdb.firebaseio.com/users.json "
    console.log(loginForm.value)
    this.httpClient.get(url,
     
    ).subscribe(users => {
      console.log(users);
      
    })
  }

}
