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
    
    this.httpClient.get(url, {params : new HttpParams()
      .set('orderBy','"email"')
      .set('equalTo', `"${loginForm.value.email}"`)}
    ).subscribe(users => {
      if(users){
        console.log(users)
      }
      
    })
  }

}
